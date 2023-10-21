package com.java.VehicleRegistrationApplication;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReactController {
    @GetMapping("/")
    public String index() {
        return "index"; // index.html dosyasının adı
    }
}
