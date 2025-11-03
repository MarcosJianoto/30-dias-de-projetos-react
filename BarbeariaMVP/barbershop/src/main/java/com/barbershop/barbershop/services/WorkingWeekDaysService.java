package com.barbershop.barbershop.services;

import com.barbershop.barbershop.dtos.BarberDTO;
import com.barbershop.barbershop.dtos.WorkingWeekDaysDTO;
import com.barbershop.barbershop.enums.DayOfWeekEnum;
import com.barbershop.barbershop.model.Barber;
import com.barbershop.barbershop.model.WorkingWeekDays;
import com.barbershop.barbershop.repositories.BarberRepository;
import com.barbershop.barbershop.repositories.WorkingWeekDaysRepository;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class WorkingWeekDaysService {

    private final WorkingWeekDaysRepository workingWeekDaysRepository;
    private final BarberRepository barberRepository;

    public WorkingWeekDaysService(WorkingWeekDaysRepository workingWeekDaysRepository, BarberRepository barberRepository) {
        this.workingWeekDaysRepository = workingWeekDaysRepository;
        this.barberRepository = barberRepository;
    }

    public Barber barberFindById(Integer id) {
        return barberRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Barbeiro não encontrado"));
    }

    public void createWorkingDays(BarberDTO barberDTO) {
        Barber barber = barberFindById(barberDTO.id());

        for(DayOfWeekEnum day: DayOfWeekEnum.values()){
            WorkingWeekDays workingWeekDays = new WorkingWeekDays();
            workingWeekDays.setDayOfWeek(day);
            workingWeekDays.setBarber(barber);
            workingWeekDays.setWorkInDay(true);

            DateTimeFormatter formatterLocalTime = DateTimeFormatter.ofPattern("HH:mm");
            LocalTime startTime = LocalTime.parse("09:00", formatterLocalTime);
            LocalTime lunchStart = LocalTime.parse("12:00", formatterLocalTime);
            LocalTime lunchFinish = LocalTime.parse("13:00", formatterLocalTime);
            LocalTime finishTime = LocalTime.parse("19:00", formatterLocalTime);

            workingWeekDaysRepository.save(workingWeekDays);
        }
    }
}
