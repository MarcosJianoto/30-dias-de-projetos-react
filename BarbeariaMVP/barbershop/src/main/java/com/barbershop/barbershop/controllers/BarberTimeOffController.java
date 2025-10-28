package com.barbershop.barbershop.controllers;

import com.barbershop.barbershop.dtos.BarberTimeOffBatchDTO;
import com.barbershop.barbershop.dtos.BarberTimeOffDTO;
import com.barbershop.barbershop.model.BarberTimeOff;
import com.barbershop.barbershop.services.BarberTimeOffService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/barbers/time-off")
public class BarberTimeOffController {

    private final BarberTimeOffService barberTimeOffService;

    public BarberTimeOffController(BarberTimeOffService barberTimeOffService) {
        this.barberTimeOffService = barberTimeOffService;
    }

    // Criar uma folga única
    @PostMapping
    public ResponseEntity<Void> createTimeOff(@RequestBody BarberTimeOffDTO barberTimeOffDTO) {
        barberTimeOffService.createBarberTimeOff(barberTimeOffDTO, null); // ou passe BarberDTO se necessário
        return ResponseEntity.ok().build();
    }

    // Criar folgas múltiplas
    @PostMapping("/batch")
    public ResponseEntity<Void> createMultipleTimeOffs(@RequestBody BarberTimeOffBatchDTO batchDTO) {
        barberTimeOffService.createListDaysTimeOff(batchDTO.getDays(), batchDTO.getBarberTimeOffDTO());
        return ResponseEntity.ok().build();
    }


    // Atualizar folga
    @PutMapping("/{id}")
    public ResponseEntity<Void> updateTimeOff(
            @PathVariable Integer id,
            @RequestBody BarberTimeOffDTO barberTimeOffDTO) {

        barberTimeOffService.updateBarberTimeOff(id, barberTimeOffDTO);
        return ResponseEntity.ok().build();
    }

    // Deletar folga
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTimeOff(@PathVariable Integer id) {
        barberTimeOffService.deleteBarberTimeOff(id);
        return ResponseEntity.ok().build();
    }

    // Buscar todas folgas (opcional)
    @GetMapping
    public ResponseEntity<List<BarberTimeOff>> getAllTimeOffs() {
        return ResponseEntity.ok(barberTimeOffService.getAllTimeOffs());
    }
}
