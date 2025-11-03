package com.barbershop.barbershop.dtos;

import com.barbershop.barbershop.enums.DayOfWeekEnum;
import com.barbershop.barbershop.model.Barber;
import jakarta.persistence.*;

import java.time.LocalTime;

public class WorkingWeekDaysDTO {

    private Integer id;

    private String dayOfWeek;

    private Integer barberId;

    private Boolean workInDay;

    private String startTime;

    private String lunchStart;

    private String lunchFinish;

    private String finishTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(String dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public Integer getBarberId() {
        return barberId;
    }

    public void setBarberId(Integer barberId) {
        this.barberId = barberId;
    }

    public Boolean getWorkInDay() {
        return workInDay;
    }

    public void setWorkInDay(Boolean workInDay) {
        this.workInDay = workInDay;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getLunchStart() {
        return lunchStart;
    }

    public void setLunchStart(String lunchStart) {
        this.lunchStart = lunchStart;
    }

    public String getLunchFinish() {
        return lunchFinish;
    }

    public void setLunchFinish(String lunchFinish) {
        this.lunchFinish = lunchFinish;
    }

    public String getFinishTime() {
        return finishTime;
    }

    public void setFinishTime(String finishTime) {
        this.finishTime = finishTime;
    }
}
