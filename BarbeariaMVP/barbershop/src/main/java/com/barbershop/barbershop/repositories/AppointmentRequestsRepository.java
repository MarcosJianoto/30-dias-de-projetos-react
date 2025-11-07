package com.barbershop.barbershop.repositories;

import com.barbershop.barbershop.model.AppointmentRequests;
import com.barbershop.barbershop.model.Barber;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

public interface AppointmentRequestsRepository extends JpaRepository<AppointmentRequests, Integer> {
    AppointmentRequests findByCustomerPhone(String customerPhone);
    void deleteByCustomerPhone(String customerPhone);

    Object findByBarberIdAndDateAppointment(Barber barber, LocalDate date);
}
