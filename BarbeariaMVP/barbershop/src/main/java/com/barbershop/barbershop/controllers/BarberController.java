package com.barbershop.barbershop.controllers;

import com.barbershop.barbershop.dtos.BarberDTO;
import com.barbershop.barbershop.services.BarberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/barbers")
public class BarberController {

    private final BarberService barberService;

    public BarberController(BarberService barberService) {
        this.barberService = barberService;
    }

    @PostMapping
    public ResponseEntity<Void> createBarber(@RequestBody BarberDTO barberDTO) {
        barberService.createBarber(barberDTO);
        return ResponseEntity.status(HttpStatus.CREATED).build(); // retorna 201
    }

    @GetMapping("/{id}")
    public ResponseEntity<BarberDTO> getBarberById(@PathVariable Integer id) {
        BarberDTO barberDTO = barberService.getBarberById(id);
        return ResponseEntity.ok(barberDTO);
    }

    @GetMapping
    public ResponseEntity<List<BarberDTO>> getAllBarbers() {
        List<BarberDTO> barbers = barberService.getAllBarbers();
        return ResponseEntity.ok(barbers);
    }

    @PatchMapping("/{id}/active")
    public ResponseEntity<Void> updateBarberActive(@PathVariable Integer id, @RequestBody Boolean isActive) {
        barberService.updateBarberActive(id, isActive);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateBarber(@PathVariable Integer id, @RequestBody BarberDTO barberDTO) {
        barberService.updateBarber(id, barberDTO);
        return ResponseEntity.noContent().build(); // retorna 204 No Content
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBarber(@PathVariable Integer id) {
        barberService.deleteBarber(id);
        return ResponseEntity.noContent().build(); // retorna 204 No Content
    }

}
