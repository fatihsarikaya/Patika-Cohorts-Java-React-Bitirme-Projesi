package com.java.VehicleRegistrationApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserRepository userRepository; // UserRepository sınıfını enjekte ediyoruz

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @PostMapping("/signup")
    public String registerUser(@RequestBody User user) {
        // Burada kullanıcı kaydı işlemi gerçekleştirilir
        userRepository.save(user);

        return "Kullanıcı kaydı başarılı: " + user.getUsername();
        //return ResponseEntity.ok("Kullanıcı kaydı başarılı: " + user.getUsername());
    }
}
