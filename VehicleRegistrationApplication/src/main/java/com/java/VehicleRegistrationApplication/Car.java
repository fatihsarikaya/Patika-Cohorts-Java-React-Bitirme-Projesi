package com.java.VehicleRegistrationApplication;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Car {
    @Id
    private Long id;
    private String plate;
    private String brand;
    private String model;

    public Car() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    // Getter ve Setter metotlarını ekleyin
}
