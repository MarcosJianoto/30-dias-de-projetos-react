package com.barbershop.barbershop.repositories;

import com.barbershop.barbershop.model.Barber;
import com.barbershop.barbershop.model.BarberTimeOff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BarberTimeOffRepository extends JpaRepository<BarberTimeOff, Integer> {
}
