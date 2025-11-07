package com.barbershop.barbershop.dtos;

public record AppointmentRequestsGetToCustomer(String customerName, String barberName, String status, String dateAppointment, String hourAppointment) {
}
