package com.barbershop.barbershop.services;

import com.barbershop.barbershop.dtos.BarberDTO;
import com.barbershop.barbershop.dtos.BarberHourAndDaysWorkDTO;
import com.barbershop.barbershop.enums.DayOfWeekEnum;
import com.barbershop.barbershop.model.Barber;
import com.barbershop.barbershop.model.WorkingWeekDays;
import com.barbershop.barbershop.repositories.BarberRepository;
import com.barbershop.barbershop.repositories.WorkingWeekDaysRepository;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
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

    public WorkingWeekDays workingWeekDaysFindById(Integer id) {
        return workingWeekDaysRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Dia de trabalho não encontrado"));
    }

    public void createWorkingDays(BarberDTO barberDTO) {
        Barber barber = barberFindById(barberDTO.id());

        for (DayOfWeekEnum day : DayOfWeekEnum.values()) {
            WorkingWeekDays workingWeekDays = new WorkingWeekDays();
            workingWeekDays.setDayOfWeek(day);
            workingWeekDays.setBarber(barber);
            workingWeekDays.setWorkInDay(true);

            DateTimeFormatter formatterLocalTime = DateTimeFormatter.ofPattern("HH:mm");
            LocalTime startTime = LocalTime.parse("09:00", formatterLocalTime);
            workingWeekDays.setStartTime(startTime);
            LocalTime lunchStart = LocalTime.parse("12:00", formatterLocalTime);
            workingWeekDays.setLunchStart(lunchStart);
            LocalTime lunchFinish = LocalTime.parse("13:00", formatterLocalTime);
            workingWeekDays.setLunchFinish(lunchFinish);
            LocalTime finishTime = LocalTime.parse("19:00", formatterLocalTime);
            workingWeekDays.setFinishTime(finishTime);

            workingWeekDaysRepository.save(workingWeekDays);
        }
    }

    public void updateBarberHourAndDaysWork(List<BarberHourAndDaysWorkDTO> listBarberHourAndDaysWorkDTO) {
        for (BarberHourAndDaysWorkDTO dto : listBarberHourAndDaysWorkDTO) {
            WorkingWeekDays day = workingWeekDaysFindById(dto.daysId());
            if (day == null) continue;

            day.setWorkInDay(dto.workDay());
            DateTimeFormatter formatterLocalTime = DateTimeFormatter.ofPattern("HH:mm");
            LocalTime startTime = LocalTime.parse(dto.startTime(), formatterLocalTime);
            day.setStartTime(startTime);
            LocalTime lunchStart = LocalTime.parse(dto.lunchStart(), formatterLocalTime);
            day.setLunchStart(lunchStart);
            LocalTime lunchFinish = LocalTime.parse(dto.lunchFinish(), formatterLocalTime);
            day.setLunchFinish(lunchFinish);
            LocalTime finishTime = LocalTime.parse(dto.finishTime(), formatterLocalTime);
            day.setFinishTime(finishTime);

            workingWeekDaysRepository.save(day);
        }
    }

    public void deleteWorkingDays(Integer barberId) {
        workingWeekDaysRepository.deleteByBarberId(barberId);
    }
}
