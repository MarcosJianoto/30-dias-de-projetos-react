package com.barbershop.barbershop.services;

import com.barbershop.barbershop.dtos.BarberScheduleDTO;
import com.barbershop.barbershop.model.Barber;
import com.barbershop.barbershop.repositories.AppointmentRequestsRepository;
import com.barbershop.barbershop.repositories.BarberRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Service
public class ScheduleService {

    private final AppointmentRequestsRepository appointmentRequestsRepository;
    private final BarberRepository barberRepository;

    public ScheduleService(AppointmentRequestsRepository appointmentRequestsRepository,
                           BarberRepository barberRepository) {
        this.appointmentRequestsRepository = appointmentRequestsRepository;
        this.barberRepository = barberRepository;
    }

    public BarberScheduleDTO getBarberSchedule(Integer barberId, String dateStr) {
        Barber barber = barberRepository.findById(barberId)
                .orElseThrow(() -> new IllegalArgumentException("Barbeiro não encontrado"));

        LocalDate date = LocalDate.parse(dateStr, DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        var appointments = appointmentRequestsRepository.findByBarberIdAndDateAppointment(barber, date);

        return new BarberScheduleDTO(barber.getName(), date.toString(), appointments);
    }
}
