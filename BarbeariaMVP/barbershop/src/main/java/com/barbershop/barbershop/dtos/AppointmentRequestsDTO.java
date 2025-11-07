package com.barbershop.barbershop.dtos;

public record AppointmentRequestsDTO (Integer id, String customerName, String customerPhone, Integer barberId, String status, String dateAppointment, String hourAppointment, String updatedAt) {
}
