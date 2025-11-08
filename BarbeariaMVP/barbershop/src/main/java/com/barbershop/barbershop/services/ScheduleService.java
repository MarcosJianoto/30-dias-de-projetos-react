package com.barbershop.barbershop.services;

import com.barbershop.barbershop.dtos.BarberAvailableTimeDTO;
import com.barbershop.barbershop.dtos.BarberScheduleDTO;
import com.barbershop.barbershop.model.Barber;
import com.barbershop.barbershop.model.WorkingWeekDays;
import com.barbershop.barbershop.repositories.AppointmentRequestsRepository;
import com.barbershop.barbershop.repositories.BarberRepository;
import com.barbershop.barbershop.repositories.WorkingWeekDaysRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class ScheduleService {

    private final AppointmentRequestsRepository appointmentRequestsRepository;
    private final BarberRepository barberRepository;
    private final WorkingWeekDaysRepository workingWeekDaysRepository;
    private final Integer minutesServices = 60;

    public ScheduleService(AppointmentRequestsRepository appointmentRequestsRepository,
                           BarberRepository barberRepository, WorkingWeekDaysRepository workingWeekDaysRepository) {
        this.appointmentRequestsRepository = appointmentRequestsRepository;
        this.barberRepository = barberRepository;
        this.workingWeekDaysRepository = workingWeekDaysRepository;
    }

    public BarberScheduleDTO getBarberSchedule(Integer barberId, String dateStr) {
        Barber barber = barberRepository.findById(barberId)
                .orElseThrow(() -> new IllegalArgumentException("Barbeiro não encontrado"));

        LocalDate date = LocalDate.parse(dateStr, DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        var appointments = appointmentRequestsRepository.findByBarberIdAndDateAppointment(barber, date);

        return new BarberScheduleDTO(barber.getName(), date.toString(), appointments);
    }

    public List<BarberAvailableTimeDTO> getBarberFreeSlots(String nameBarber, String dayOfWeek) {

        List<WorkingWeekDays> workingWeekDays = workingWeekDaysRepository.findAll();
        Barber barber = barberRepository.findByName(nameBarber);
        for (WorkingWeekDays day : workingWeekDays) {
            if (day.getBarber().getName().equals(nameBarber)
                    && day.getDayOfWeek().toString().equals(dayOfWeek)
                    && Boolean.TRUE.equals(day.getWorkInDay())) {

                //aqui vai retornar a lista de horários disponíveis.... agora preciso pensar ;x

            }
        }


        return List < BarberAvailableTimeDTO >
    }
}
