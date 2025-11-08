package com.barbershop.barbershop.services;

import com.barbershop.barbershop.dtos.AppointmentRequestsDTO;
import com.barbershop.barbershop.dtos.AppointmentRequestsGetToCustomer;
import com.barbershop.barbershop.dtos.AppointmentRequestsUpdateDTO;
import com.barbershop.barbershop.enums.Status;
import com.barbershop.barbershop.model.AppointmentRequests;
import com.barbershop.barbershop.model.Barber;
import com.barbershop.barbershop.repositories.AppointmentRequestsRepository;
import com.barbershop.barbershop.repositories.BarberRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Service
public class AppointmentRequestsService {

    private final AppointmentRequestsRepository appointmentRequestsRepository;
    private final BarberRepository barberRepository;

    public AppointmentRequestsService(AppointmentRequestsRepository appointmentRequestsRepository, BarberRepository barberRepository) {
        this.appointmentRequestsRepository = appointmentRequestsRepository;
        this.barberRepository = barberRepository;
    }

    public Barber barberFindById(Integer id) {
        return barberRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Barbeiro não encontrado"));
    }

    public AppointmentRequests appointmentRequestsFindById(Integer id) {
        return appointmentRequestsRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Agendamento não encontrado"));
    }

    public AppointmentRequests appointmentRequestsFindByCustomerPhone(String customerPhone) {
        return appointmentRequestsRepository.findByCustomerPhone(customerPhone);
    }

    public void createAppointmentRequests(AppointmentRequestsDTO appointmentRequestsDTO) {
        if (appointmentRequestsDTO == null) {
            return;
        }

        Barber barber = barberFindById(appointmentRequestsDTO.barberId());

        AppointmentRequests appointmentRequests = new AppointmentRequests();
        appointmentRequests.setCustomerName(appointmentRequestsDTO.customerName());
        appointmentRequests.setCustomerPhone(appointmentRequestsDTO.customerName());
        appointmentRequests.setBarberId(barber);
        appointmentRequests.setStatus(Status.valueOf(appointmentRequestsDTO.status()));

        DateTimeFormatter formatterDateTime = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate date = LocalDate.parse(appointmentRequestsDTO.dateAppointment(), formatterDateTime);
        appointmentRequests.setDateAppointment(date);

        DateTimeFormatter formatterLocalTime = DateTimeFormatter.ofPattern("HH:mm");
        LocalTime hour = LocalTime.parse(appointmentRequestsDTO.hourAppointment(), formatterLocalTime);
        appointmentRequests.setHourAppointment(hour);

        appointmentRequests.setCreatedAt(LocalDateTime.now());
        appointmentRequests.setUpdatedAt(LocalDateTime.now());

        appointmentRequestsRepository.save(appointmentRequests);
    }

    public void updateAppointmentRequests(String customerPhone, AppointmentRequestsUpdateDTO appointmentRequestsUpdateDTO) {
        if (appointmentRequestsUpdateDTO == null) {
            return;
        }

        DateTimeFormatter formatterDateTime = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate date = LocalDate.parse(appointmentRequestsUpdateDTO.dateAppointment(), formatterDateTime);

        AppointmentRequests appointmentRequests = appointmentRequestsFindByCustomerPhone(customerPhone);
        appointmentRequests.setDateAppointment(date);

        DateTimeFormatter formatterLocalTime = DateTimeFormatter.ofPattern("HH:mm");
        LocalTime hour = LocalTime.parse(appointmentRequestsUpdateDTO.hourAppointment(), formatterLocalTime);
        appointmentRequests.setHourAppointment(hour);

        appointmentRequests.setUpdatedAt(LocalDateTime.now());

        appointmentRequestsRepository.save(appointmentRequests);
    }

    public AppointmentRequestsGetToCustomer getAppointmentRequests(String customerPhone) {
        AppointmentRequests appointmentRequests = appointmentRequestsFindByCustomerPhone(customerPhone);
        return new AppointmentRequestsGetToCustomer(
                appointmentRequests.getCustomerName(),
                appointmentRequests.getBarberId().getName(),
                String.valueOf(appointmentRequests.getStatus()),
                String.valueOf(appointmentRequests.getDateAppointment()),
                String.valueOf(appointmentRequests.getHourAppointment())
        );
    }

    public void deleteAppointmentRequests(Boolean canceled, String customerPhone) {
        if (Boolean.TRUE.equals(canceled)) {
            appointmentRequestsRepository.deleteByCustomerPhone(customerPhone);
        }
    }

}
