package com.barbershop.barbershop.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "barber")
public class BarberTimeOff {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "barber_time_off_sequence")
    @SequenceGenerator(name = "barber_time_off_sequence", sequenceName = "barber_time_off_sequence", allocationSize = 1)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "barber_id", nullable = false)
    private Barber barberId;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "date", nullable = false)
    private LocalDate date;

    @Column(name = "start_time", nullable = false)
    private LocalTime startTime;

    @Column(name = "finish_time", nullable = false)
    private LocalTime finishTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Barber getBarberId() {
        return barberId;
    }

    public void setBarberId(Barber barberId) {
        this.barberId = barberId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getFinishTime() {
        return finishTime;
    }

    public void setFinishTime(LocalTime finishTime) {
        this.finishTime = finishTime;
    }
}