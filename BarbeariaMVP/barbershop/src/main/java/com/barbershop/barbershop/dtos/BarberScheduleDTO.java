package com.barbershop.barbershop.dtos;

public record BarberScheduleDTO(
        String barberName,
        String date,
        Object appointments
) {}
