package com.example.experiment7.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    
    @GetMapping("/dashboard")
    public Map<String, Object> adminDashboard(Authentication authentication) {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Welcome, admin");
        response.put("username", authentication.getName());
        response.put("authorities", authentication.getAuthorities());
        response.put("access", "Only ADMIN can access this endpoint");
        return response;
    }
    
    @GetMapping("/users")
    public Map<String, String> getAllUsers() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Admin - User Management");
        response.put("description", "This endpoint is restricted to ADMIN role only");
        response.put("info", "Here you would see all users in the system");
        return response;
    }
}
