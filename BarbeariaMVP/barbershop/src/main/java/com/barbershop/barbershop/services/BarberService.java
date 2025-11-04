package com.barbershop.barbershop.services;

import com.barbershop.barbershop.dtos.BarberDTO;
import com.barbershop.barbershop.model.Barber;
import com.barbershop.barbershop.repositories.BarberRepository;
import com.barbershop.barbershop.repositories.WorkingWeekDaysRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BarberService {

    private final BarberRepository barberRepository;
    private final WorkingWeekDaysService workingWeekDaysService;

    public BarberService(BarberRepository barberRepository, WorkingWeekDaysService workingWeekDaysService) {
        this.barberRepository = barberRepository;
        this.workingWeekDaysService = workingWeekDaysService;
    }

    public Barber barberFindById(Integer id) {
        return barberRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Barbeiro não encontrado"));
    }

    public void createBarber(BarberDTO barberDTO) {
        if (barberDTO == null) {
            return;
        }

        //valida se barbeiro existe no banco, caso existe, retorna um erro.
        List<Barber> barberExist = barberRepository.findAll();
        for (Barber barb : barberExist) {
            if (barberDTO.phoneNumber().equals(barb.getPhoneNumber())) {
                throw new IllegalArgumentException("Barbeiro já existente");
            }
        }

        Barber barber = new Barber();
        barber.setName(barberDTO.name());
        barber.setPhoneNumber(barberDTO.phoneNumber());
        barber.setActive(barberDTO.isActive());

        //chama a criação da agenda para o barbeiro.
        workingWeekDaysService.createWorkingDays(barberDTO);

        //salva no banco
        barberRepository.save(barber);
    }

    public BarberDTO getBarberById(Integer id) {
        Barber barber = barberFindById(id);
        return new BarberDTO(barber.getId(), barber.getName(), barber.getPhoneNumber(), barber.getActive());
    }

    public List<BarberDTO> getAllBarbers() {
        List<Barber> listBarber = barberRepository.findAll();
        List<BarberDTO> listBarberDTO = new ArrayList<>();
        if (!listBarber.isEmpty()) {
            for (Barber list : listBarber) {
                BarberDTO barberDTO = new BarberDTO(list.getId(), list.getName(), list.getPhoneNumber(), list.getActive());
                listBarberDTO.add(barberDTO);
            }
        }
        return listBarberDTO;
    }

    public void updateBarber(Integer id, BarberDTO barberDTO) {
        Barber barber = barberFindById(id);

        barber.setName(barberDTO.name());
        barber.setPhoneNumber(barberDTO.phoneNumber());
        barber.setActive(barberDTO.isActive());

        barberRepository.save(barber);
    }

    public void updateBarberActive(Integer id, Boolean isActive) {
        Barber barber = barberFindById(id);
        barber.setActive(isActive);
        barberRepository.save(barber);
    }

    public void deleteBarber(Integer id) {
        Barber barber = barberFindById(id);

        if (id != null) {
            barberRepository.deleteById(id);
            workingWeekDaysService.deleteWorkingDays(barber.getId());
        } else {
            throw new IllegalArgumentException("Barbeiro não existe");
        }
    }


}
