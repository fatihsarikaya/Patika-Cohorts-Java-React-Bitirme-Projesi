package com.java.VehicleRegistrationApplication;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

    @GetMapping("/springboot")
    public String springboot(){
        return "Welcome to the Spring Boot World";
    }
}
