import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button, Box, Card, CardContent, Alert } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

function UserDashboard() {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const role = sessionStorage.getItem("role");
    if (!role) {
      navigate("/");
    }
  }, [navigate]);

  const fetchProfile = async () => {
    try {
      setError("");
      const username = sessionStorage.getItem("username");
      const password = sessionStorage.getItem("password");

      const res = await axios.get("http://localhost:8080/api/user/profile", {
        auth: { username, password }
      });

      setProfileData(res.data);
    } catch (err) {
      setError("Failed to fetch profile data");
      console.error(err);
    }
  };

  const tryAdminAccess = async () => {
    try {
      setError("");
      const username = sessionStorage.getItem("username");
      const password = sessionStorage.getItem("password");

      await axios.get("http://localhost:8080/api/admin/dashboard", {
        auth: { username, password }
      });

      alert("Success! You have admin access.");
    } catch (err) {
      if (err.response && err.response.status === 403) {
        setError("❌ Access Denied: You don't have ADMIN privileges!");
      } else {
        setError("Error accessing admin endpoint");
      }
    }
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const username = sessionStorage.getItem("username");
  const role = sessionStorage.getItem("role");

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4">
            <PersonIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            User Dashboard
          </Typography>
          <Button
            variant="outlined"
            color="error"
            startIcon={<LogoutIcon />}
            onClick={logout}
          >
            Logout
          </Button>
        </Box>

        <Card sx={{ mb: 3, bgcolor: 'primary.light', color: 'white' }}>
          <CardContent>
            <Typography variant="h6">Welcome, {username}!</Typography>
            <Typography variant="body2">Role: {role}</Typography>
          </CardContent>
        </Card>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button
            variant="contained"
            color="success"
            onClick={fetchProfile}
            fullWidth
          >
            Get My Profile
          </Button>

          <Button
            variant="contained"
            color="warning"
            onClick={tryAdminAccess}
            fullWidth
          >
            Try Admin Access (Will Fail)
          </Button>
        </Box>

        {profileData && (
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Profile Data:</Typography>
              <pre style={{ background: '#f5f5f5', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
                {JSON.stringify(profileData, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}

        <Box sx={{ mt: 3, p: 2, bgcolor: 'info.light', borderRadius: 1 }}>
          <Typography variant="body2" color="white">
            ℹ️ As a USER, you can access user endpoints but NOT admin endpoints.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default UserDashboard;
