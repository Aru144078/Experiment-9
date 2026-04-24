package com.example.experiment7.config;

import com.example.experiment7.entity.User;
import com.example.experiment7.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataLoader {
    
    @Bean
    CommandLineRunner initDatabase(UserRepository repository, PasswordEncoder passwordEncoder) {
        return args -> {
            // Create user1 with USER role
            User user1 = new User();
            user1.setUsername("user1");
            user1.setPassword(passwordEncoder.encode("user123"));
            user1.setRole("USER");
            repository.save(user1);
            
            // Create admin1 with ADMIN role
            User admin1 = new User();
            admin1.setUsername("admin1");
            admin1.setPassword(passwordEncoder.encode("admin123"));
            admin1.setRole("ADMIN");
            repository.save(admin1);
            
            System.out.println("✅ Users loaded successfully!");
        };
    }
}
