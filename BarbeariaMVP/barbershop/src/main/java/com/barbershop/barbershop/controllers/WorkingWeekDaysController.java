package com.barbershop.barbershop.controllers;

import com.barbershop.barbershop.dtos.BarberDTO;
import com.barbershop.barbershop.dtos.BarberHourAndDaysWorkDTO;
import com.barbershop.barbershop.services.WorkingWeekDaysService;
import jakarta.persistence.Table;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Table(name = "working_week_days")
public class WorkingWeekDaysController {

    private final WorkingWeekDaysService workingWeekDaysService;

    public WorkingWeekDaysController(WorkingWeekDaysService workingWeekDaysService) {
        this.workingWeekDaysService = workingWeekDaysService;
    }

    @PostMapping
    public ResponseEntity<Void> createDefaultWorkingDays(@RequestBody BarberDTO barberDTO) {
        workingWeekDaysService.createWorkingDays(barberDTO);
        return ResponseEntity.ok().build();
    }

    @PutMapping
    public ResponseEntity<Void> updateWorkingDays(
            @RequestBody List<BarberHourAndDaysWorkDTO> workingDaysDTO) {
        workingWeekDaysService.updateBarberHourAndDaysWork(workingDaysDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{barberId}")
    public ResponseEntity<Void> deleteWorkingDays(@PathVariable Integer barberId) {
        workingWeekDaysService.deleteWorkingDays(barberId);
        return ResponseEntity.noContent().build();
    }

}
