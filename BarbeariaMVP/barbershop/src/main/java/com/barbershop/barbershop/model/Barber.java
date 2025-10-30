package com.barbershop.barbershop.model;

import jakarta.persistence.*;

@Entity
@Table(name = "barber")
public class Barber {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "barber_sequence")
    @SequenceGenerator(name = "barber_sequence", sequenceName = "barber_sequence", allocationSize = 1)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "is_active", nullable = false)
    private Boolean isActive;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }
}