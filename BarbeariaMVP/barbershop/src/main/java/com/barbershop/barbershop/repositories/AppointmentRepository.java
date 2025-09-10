package com.barbershop.repository;

import com.barbershop.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDateTime;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    boolean existsByDateTimeAndStatusIn(LocalDateTime dateTime, List<String> statuses);
}