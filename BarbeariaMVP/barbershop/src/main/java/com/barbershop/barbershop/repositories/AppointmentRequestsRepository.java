package com.barbershop.barbershop.repositories;

import com.barbershop.barbershop.model.AppointmentRequests;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRequestsRepository extends JpaRepository<AppointmentRequests, Integer> {
    AppointmentRequests findByCustomerPhone(String customerPhone);
    void deleteByCustomerPhone(String customerPhone);
}
