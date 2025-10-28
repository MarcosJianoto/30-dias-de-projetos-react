package com.barbershop.barbershop.dtos;

import java.util.List;

public class BarberTimeOffBatchDTO {
    private BarberTimeOffDTO barberTimeOffDTO;
    private List<String> days;

    public BarberTimeOffDTO getBarberTimeOffDTO() {
        return barberTimeOffDTO;
    }

    public List<String> getDays() {
        return days;
    }
}
