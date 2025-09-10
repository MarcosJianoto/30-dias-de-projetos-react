package com.barbershop.service;

import com.barbershop.model.Appointment;
import com.barbershop.repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AppointmentService {

    private final AppointmentRepository repository;

    public AppointmentService(AppointmentRepository repository) {
        this.repository = repository;
    }

    public Appointment createAppointment(Appointment appointment) {
        LocalTime start = LocalTime.of(9, 0);  // abre às 09h
        LocalTime end = LocalTime.of(19, 0); // fecha às 19h

        if (dateTime.toLocalTime().isBefore(start) || dateTime.toLocalTime().isAfter(end)) {
            throw new RuntimeException("Horário fora do expediente!");
        }

        boolean exists = repository.existsByDateTimeAndStatusIn(
                appointment.getDateTime(),
                List.of("PENDING", "CONFIRMED")
        );

        if (exists) {
            throw new RuntimeException("Horário já ocupado!");
        }

        return repository.save(appointment);
    }


    public List<Appointment> getAppointmentsForDay(LocalDateTime start, LocalDateTime end) {
        return repository.findByDateTimeBetween(start, end);
    }

    public Appointment confirm(Long id) {
        Appointment appt = repository.findById(id).orElseThrow();
        appt.setStatus(Appointment.Status.CONFIRMED);
        return repository.save(appt);
    }

    public Appointment cancel(Long id) {
        Appointment appt = repository.findById(id).orElseThrow();
        appt.setStatus(Appointment.Status.CANCELED);
        return repository.save(appt);
    }
}
