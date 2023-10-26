package com.java.VehicleRegistrationApplication;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Cars, Long> {
    // Custom queries can be added here
}
