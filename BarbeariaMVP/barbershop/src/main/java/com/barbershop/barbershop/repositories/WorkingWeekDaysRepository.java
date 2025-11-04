package com.barbershop.barbershop.repositories;

import com.barbershop.barbershop.model.Barber;
import com.barbershop.barbershop.model.WorkingWeekDays;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkingWeekDaysRepository extends JpaRepository<WorkingWeekDays, Integer> {
    void deleteByBarberId(Integer barberId);
}
