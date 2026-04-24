import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      setError("");
      
      // Try to authenticate by calling the user profile endpoint
      const res = await axios.get("http://localhost:8080/api/user/profile", {
        auth: { username, password }
      });

      if (res.status === 200) {
        // Store credentials in sessionStorage
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        
        // Determine role based on username (simple approach)
        const role = username.includes("admin") ? "ADMIN" : "USER";
        sessionStorage.setItem("role", role);

        // Redirect based on role
        if (role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h4" gutterBottom>
          🔐 RBAC Login
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Experiment 9 - Frontend Integration
        </Typography>
        
        <Box sx={{ mt: 3, width: '100%' }}>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="user1 or admin1"
          />
          
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="user123 or admin123"
          />
          
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 3, mb: 2 }}
            onClick={login}
          >
            Login
          </Button>
          
          <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
            <Typography variant="caption" display="block" gutterBottom>
              <strong>Test Credentials:</strong>
            </Typography>
            <Typography variant="caption" display="block">
              USER: user1 / user123
            </Typography>
            <Typography variant="caption" display="block">
              ADMIN: admin1 / admin123
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
