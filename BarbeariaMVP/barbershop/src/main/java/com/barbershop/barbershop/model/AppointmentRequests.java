package com.barbershop.barbershop.model;

import com.barbershop.barbershop.enums.Status;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name = "appointment_requests")
public class AppointmentRequests {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "appointment_requests_sequence")
    @SequenceGenerator(name = "appointment_requests_sequence", sequenceName = "appointment_requests_sequence", allocationSize = 1)
    private Integer id;

    @Column(name = "customer_name", nullable = false)
    private String customerName;

    @Column(name = "customer_phone", nullable = false)
    private String customerPhone;

    @JoinColumn(name = "barber_id", nullable = false)
    @ManyToOne
    private Barber barberId;

    @Column(name = "status", nullable = false)
    private Status status;

    @Column(name = "date_appointment", nullable = false)
    private LocalDate dateAppointment;

    @Column(name = "customer_phone", nullable = false)
    private LocalTime hourAppointment;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) {
        this.customerPhone = customerPhone;
    }

    public Barber getBarberId() {
        return barberId;
    }

    public void setBarberId(Barber barberId) {
        this.barberId = barberId;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public LocalDate getDateAppointment() {
        return dateAppointment;
    }

    public void setDateAppointment(LocalDate dateAppointment) {
        this.dateAppointment = dateAppointment;
    }

    public LocalTime getHourAppointment() {
        return hourAppointment;
    }

    public void setHourAppointment(LocalTime hourAppointment) {
        this.hourAppointment = hourAppointment;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}