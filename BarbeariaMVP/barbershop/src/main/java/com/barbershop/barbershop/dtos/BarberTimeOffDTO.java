package com.barbershop.barbershop.dtos;

public record BarberTimeOffDTO(Integer id, Integer barberId, String description, String date, String startTime, String finishTime) {
}
