package com.barbershop.controller;

import com.barbershop.model.Appointment;
import com.barbershop.service.AppointmentService;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    private final AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    @PostMapping
    public Appointment create(@RequestBody Appointment appointment) {
        return service.save(appointment);
    }

    @GetMapping("/day")
    public List<Appointment> getDayAppointments(
            @RequestParam LocalDateTime start,
            @RequestParam LocalDateTime end) {
        return service.getAppointmentsForDay(start, end);
    }

    @PutMapping("/{id}/confirm")
    public Appointment confirm(@PathVariable Long id) {
        return service.confirm(id);
    }

    @PutMapping("/{id}/cancel")
    public Appointment cancel(@PathVariable Long id) {
        return service.cancel(id);
    }
}
