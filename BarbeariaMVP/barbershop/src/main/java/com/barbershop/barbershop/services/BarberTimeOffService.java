package com.barbershop.barbershop.services;

import com.barbershop.barbershop.dtos.BarberDTO;
import com.barbershop.barbershop.dtos.BarberTimeOffDTO;
import com.barbershop.barbershop.model.Barber;
import com.barbershop.barbershop.model.BarberTimeOff;
import com.barbershop.barbershop.repositories.BarberRepository;
import com.barbershop.barbershop.repositories.BarberTimeOffRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
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
        LocalTime startTime = LocalTime.parse(barberTimeOffDTO.startTime(), formatterTime);
        barberTimeOff.setStartTime(startTime);
        LocalTime finishTime = LocalTime.parse(barberTimeOffDTO.finishTime(), formatterTime);
        barberTimeOff.setFinishTime(finishTime);

        barberTimeOffRepository.save(barberTimeOff);
    }

    public void createListDaysTimeOff(List<String> days, BarberTimeOffDTO barberTimeOffDTO) {

        if (days == null || days.isEmpty()) {
            return;
        }

        Barber barber = barberRepository.findById(barberTimeOffDTO.barberId())
                .orElseThrow(() -> new IllegalArgumentException("Barbeiro não encontrado"));

        // Formato de data
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        // Formato de hora
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm");

        List<BarberTimeOff> timeOffList = new ArrayList<>();

        for (String dayStr : days) {
            LocalDate date;
            try {
                date = LocalDate.parse(dayStr, dateFormatter);
            } catch (DateTimeParseException e) {
                // Ignorar datas inválidas ou logar aviso
                System.out.println("Data inválida: " + dayStr);
                continue;
            }

            BarberTimeOff barberTimeOff = new BarberTimeOff();
            barberTimeOff.setBarberId(barber);
            barberTimeOff.setDescription(barberTimeOffDTO.description());
            barberTimeOff.setDate(date);

            // Hora de início e fim
            LocalTime startTime = LocalTime.parse(barberTimeOffDTO.startTime(), timeFormatter);
            LocalTime finishTime = LocalTime.parse(barberTimeOffDTO.finishTime(), timeFormatter);
            barberTimeOff.setStartTime(startTime);
            barberTimeOff.setFinishTime(finishTime);

            timeOffList.add(barberTimeOff);
        }
        barberTimeOffRepository.saveAll(timeOffList);
    }

    public void updateBarberTimeOff(Integer id, BarberTimeOffDTO barberTimeOffDTO) {

        if (id == null) {
            return;
        }

        BarberTimeOff barberTimeOff = barberTimeOffRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Time off not found"));

        Barber barber = barberRepository.findById(barberTimeOffDTO.barberId()).
                orElseThrow(() -> new IllegalArgumentException("Barbeiro não encontrado"));

        barberTimeOff.setBarberId(barber);
        barberTimeOff.setDescription(barberTimeOffDTO.description());

        //dd/mm/yyyy
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate date = LocalDate.parse(barberTimeOffDTO.date(), formatter);
        barberTimeOff.setDate(date);

        //"HH:mm"
        DateTimeFormatter formatterTime = DateTimeFormatter.ofPattern("HH:mm");
        LocalTime startTime = LocalTime.parse(barberTimeOffDTO.startTime(), formatterTime);
        barberTimeOff.setStartTime(startTime);
        LocalTime finishTime = LocalTime.parse(barberTimeOffDTO.finishTime(), formatterTime);
        barberTimeOff.setFinishTime(finishTime);

        barberTimeOffRepository.save(barberTimeOff);
    }

    public List<BarberTimeOff> getAllTimeOffs() {
        return barberTimeOffRepository.findAll();
    }

    public void deleteBarberTimeOff(Integer id) {
        if (id != null) {
            barberTimeOffRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Não é possível deletar um feriado/folga vazio(a)");
        }
    }
}
