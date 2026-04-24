package com.example.experiment7.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {
    
    @GetMapping("/profile")
    public Map<String, Object> userProfile(Authentication authentication) {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Welcome, authenticated user");
        response.put("username", authentication.getName());
        response.put("authorities", authentication.getAuthorities());
        response.put("access", "USER and ADMIN can access this endpoint");
        return response;
    }
    
    @GetMapping("/dashboard")
    public Map<String, String> userDashboard() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "User Dashboard");
        response.put("description", "This is accessible by USER and ADMIN roles");
        return response;
    }
}
