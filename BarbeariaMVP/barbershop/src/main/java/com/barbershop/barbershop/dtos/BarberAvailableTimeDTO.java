package com.barbershop.barbershop.dtos;

import java.time.LocalDate;
import java.time.LocalTime;

public record BarberAvailableTimeDTO(String barberName, LocalDate date, LocalTime time) {
}
