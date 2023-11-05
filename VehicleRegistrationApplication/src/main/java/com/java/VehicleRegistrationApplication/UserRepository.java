package com.java.VehicleRegistrationApplication;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // İhtiyaca göre özelleştirilmiş sorguları ekleyebilirsiniz.
}
