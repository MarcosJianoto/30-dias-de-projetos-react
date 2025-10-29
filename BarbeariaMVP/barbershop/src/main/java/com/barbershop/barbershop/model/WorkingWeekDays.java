package com.barbershop.barbershop.model;

import com.barbershop.barbershop.enums.DayOfWeekEnum;
import jakarta.persistence.*;

import java.time.LocalTime;

@Entity
@Table(name = "working_week_days")
public class WorkingWeekDays {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "working_week_days_sequence")
    @SequenceGenerator(name = "working_week_days_sequence", sequenceName = "working_week_days_sequence", allocationSize = 1)
    private Integer id;

    @Column(name = "day_of_week", nullable = false)
    @Enumerated(EnumType.STRING)
    private DayOfWeekEnum dayOfWeek;

    @JoinColumn(name = "barber_id", nullable = false)
    @ManyToOne
    private Barber barber;

    @Column(name = "work_in_day", nullable = false)
    private Boolean workInDay;

    @Column(name = "start_time", nullable = true)
    private LocalTime startTime;

    @Column(name = "lunch_start", nullable = true)
    private LocalTime lunchStart;

    @Column(name = "lunch_finish", nullable = true)
    private LocalTime lunchFinish;

    @Column(name = "finish_time", nullable = true)
    private LocalTime finishTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public DayOfWeekEnum getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(DayOfWeekEnum dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public Barber getBarber() {
        return barber;
    }

    public void setBarber(Barber barber) {
        this.barber = barber;
    }

    public Boolean getWorkInDay() {
        return workInDay;
    }

    public void setWorkInDay(Boolean workInDay) {
        this.workInDay = workInDay;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getLunchStart() {
        return lunchStart;
    }

    public void setLunchStart(LocalTime lunchStart) {
        this.lunchStart = lunchStart;
    }

    public LocalTime getLunchFinish() {
        return lunchFinish;
    }

    public void setLunchFinish(LocalTime lunchFinish) {
        this.lunchFinish = lunchFinish;
    }

    public LocalTime getFinishTime() {
        return finishTime;
    }

    public void setFinishTime(LocalTime finishTime) {
        this.finishTime = finishTime;
    }
}