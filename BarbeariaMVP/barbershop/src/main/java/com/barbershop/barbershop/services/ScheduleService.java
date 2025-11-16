package com.barbershop.barbershop.services;

import com.barbershop.barbershop.dtos.BarberAvailableTimeDTO;
import com.barbershop.barbershop.dtos.BarberScheduleDTO;
import com.barbershop.barbershop.enums.DayOfWeekEnum;
import com.barbershop.barbershop.model.Barber;
import com.barbershop.barbershop.model.WorkingWeekDays;
import com.barbershop.barbershop.repositories.AppointmentRequestsRepository;
import com.barbershop.barbershop.repositories.BarberRepository;
import com.barbershop.barbershop.repositories.WorkingWeekDaysRepository;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class ScheduleService {

    private final AppointmentRequestsRepository appointmentRequestsRepository;
    private final BarberRepository barberRepository;
    private final WorkingWeekDaysRepository workingWeekDaysRepository;
    private final Integer minutesServices = 30;

    public ScheduleService(AppointmentRequestsRepository appointmentRequestsRepository,
                           BarberRepository barberRepository, WorkingWeekDaysRepository workingWeekDaysRepository) {
        this.appointmentRequestsRepository = appointmentRequestsRepository;
        this.barberRepository = barberRepository;
        this.workingWeekDaysRepository = workingWeekDaysRepository;
    }

    public BarberScheduleDTO getBarberSchedule(Integer barberId, String dateStr) {
        Barber barber = barberRepository.findById(barberId)
                .orElseThrow(() -> new IllegalArgumentException("Barbeiro não encontrado"));

        LocalDate date = LocalDate.parse(dateStr, DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        var appointments = appointmentRequestsRepository.findByBarberIdAndDateAppointment(barber, date);

        return new BarberScheduleDTO(barber.getName(), date.toString(), appointments);
    }

    //validar agenda do barbeiro
    public List<BarberAvailableTimeDTO> barberAvailableTimeDTOS(String nameBarber, String dataAppointment) {
        Barber barber = barberRepository.findByName(nameBarber);

        DateTimeFormatter formatterDateTime = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate date = LocalDate.parse(dataAppointment, formatterDateTime);

        DayOfWeek dayOfWeek = date.getDayOfWeek(); //dia da semana da data
        DayOfWeekEnum dia = DayOfWeekEnum.valueOf(dayOfWeek.toString()); //converte para DayOfWeekEnum

        List<BarberAvailableTimeDTO> availableTimes = new ArrayList<>();

        List<WorkingWeekDays> workingWeekDays = workingWeekDaysRepository.findAll();
        for (WorkingWeekDays day : workingWeekDays) {
            if (day.getBarber().getName().equals(barber.getName())) {
                if (Boolean.TRUE.equals(day.getWorkInDay())) {
                    if (day.getDayOfWeek().equals(dia)) {

                        LocalTime startTime = day.getStartTime();
                        LocalTime lunchStart = day.getLunchStart();
                        LocalTime lunchFinish = day.getLunchFinish();
                        LocalTime finishTime = day.getFinishTime();

                        for (LocalTime horaAtual = startTime; horaAtual.isBefore(lunchStart); horaAtual = horaAtual.plusMinutes(minutesServices)) {
                            availableTimes.add(new BarberAvailableTimeDTO(barber.getName(), date, horaAtual));
                        }

                        for (LocalTime horaAtual = lunchFinish; horaAtual.isBefore(finishTime); horaAtual = horaAtual.plusMinutes(minutesServices)) {
                            availableTimes.add(new BarberAvailableTimeDTO(barber.getName(), date, horaAtual));
                        }
                    }
                }

            }
        }


    }

    public List<BarberAvailableTimeDTO> getBarberFreeSlots(String nameBarber, String dayOfWeek) {

        List<WorkingWeekDays> workingWeekDays = workingWeekDaysRepository.findAll();
        Barber barber = barberRepository.findByName(nameBarber);
        for (WorkingWeekDays day : workingWeekDays) {
            if (day.getBarber().getName().equals(nameBarber)
                    && day.getDayOfWeek().toString().equals(dayOfWeek)
                    && Boolean.TRUE.equals(day.getWorkInDay())) {


                //aqui vai retornar a lista de horários disponíveis.... agora preciso pensar ;x

            }
        }


        return List < BarberAvailableTimeDTO >
    }
}
