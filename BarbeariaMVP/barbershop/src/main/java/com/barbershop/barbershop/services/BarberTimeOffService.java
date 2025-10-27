package com.barbershop.barbershop.services;

import com.barbershop.barbershop.dtos.BarberDTO;
import com.barbershop.barbershop.dtos.BarberTimeOffDTO;
import com.barbershop.barbershop.model.Barber;
import com.barbershop.barbershop.model.BarberTimeOff;
import com.barbershop.barbershop.repositories.BarberRepository;
import com.barbershop.barbershop.repositories.BarberTimeOffRepository;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class BarberTimeOffService {

    private final BarberRepository barberRepository;
    private final BarberTimeOffRepository barberTimeOffRepository;

    public BarberTimeOffService(BarberRepository barberRepository, BarberTimeOffRepository barberTimeOffRepository) {
        this.barberRepository = barberRepository;
        this.barberTimeOffRepository = barberTimeOffRepository;
    }

    public Barber barberFindById(Integer id) {
        return barberRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Barbeiro não encontrado"));
    }

    public void createBarberTimeOff(BarberTimeOffDTO barberTimeOffDTO, BarberDTO barberDTO) {
        if (barberTimeOffDTO == null) {
            return;
        }

        Barber barber = barberFindById(barberDTO.id());

        BarberTimeOff barberTimeOff = new BarberTimeOff();
        barberTimeOff.setBarberId(barber);

        barberTimeOff.setDescription(barberTimeOffDTO.description());

        //dd/mm/yyyy
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate date = LocalDate.parse(barberTimeOffDTO.date(), formatter);
        barberTimeOff.setDate(date);

        //"HH:mm"
        DateTimeFormatter formatterTime = DateTimeFormatter.ofPattern("HH:mm");
        LocalTime time = LocalTime.parse(barberTimeOffDTO.time(), formatterTime);
        barberTimeOff.setTime(time);

        barberTimeOffRepository.save(barberTimeOff);
    }

    public void deleteBarberTimeOff(Integer id) {
        if (id != null) {
            barberTimeOffRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Não é possível deletar um feriado/folga vazio(a)");
        }
    }
}
