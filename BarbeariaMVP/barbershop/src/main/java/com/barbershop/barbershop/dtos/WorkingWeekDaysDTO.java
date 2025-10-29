package com.barbershop.barbershop.dtos;

public record WorkingWeekDaysDTO(Integer id, String dayOfWeek, Integer barberId, Boolean workInDay, String startTime,
                                 String finishTime, String lunchStart, String lunchFinish) {
}
