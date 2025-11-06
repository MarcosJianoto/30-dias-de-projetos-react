package com.barbershop.barbershop.enums;

public enum Status {

    PENDING("Pendente"),
    CONFIRMED("Confirmado"),
    COMPLETED("Concluído"),
    CANCELLED("Cancelado"),
    ;

    private final String description;

    Status(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
