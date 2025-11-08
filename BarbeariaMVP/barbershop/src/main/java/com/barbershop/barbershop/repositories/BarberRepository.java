package com.barbershop.barbershop.repositories;

import com.barbershop.barbershop.model.Barber;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BarberRepository extends JpaRepository<Barber, Integer> {
    Barber findByName(String nameBarber);
}
