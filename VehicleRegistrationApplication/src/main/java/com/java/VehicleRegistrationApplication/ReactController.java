package com.java.VehicleRegistrationApplication;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReactController {
    @GetMapping("/")
    public String index() {
        return "forward:/index.html"; // React uygulamanızın index.html dosyasını gösterir
    }
}
