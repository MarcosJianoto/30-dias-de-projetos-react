package com.barbershop.barbershop.dtos;

public record BarberHourAndDaysWorkDTO(
        Integer barberId,
        Integer daysId,
        Boolean workDay,
        String startTime,
        String lunchStart,
        String lunchFinish,
        String finishTime) {
}
