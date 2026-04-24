import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button, Box, Card, CardContent, Alert, Grid } from "@mui/material";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';

function AdminDashboard() {
  const [adminData, setAdminData] = useState(null);
  const [userProfileData, setUserProfileData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const role = sessionStorage.getItem("role");
    if (role !== "ADMIN") {
      alert("❌ Access Denied: Admin privileges required!");
      navigate("/");
    }
  }, [navigate]);

  const fetchAdminData = async () => {
    try {
      setError("");
      const username = sessionStorage.getItem("username");
      const password = sessionStorage.getItem("password");

      const res = await axios.get("http://localhost:8080/api/admin/dashboard", {
        auth: { username, password }
      });

      setAdminData(res.data);
    } catch (err) {
      setError("Failed to fetch admin data");
      console.error(err);
    }
  };

  const fetchUserProfile = async () => {
    try {
      setError("");
      const username = sessionStorage.getItem("username");
      const password = sessionStorage.getItem("password");

      const res = await axios.get("http://localhost:8080/api/user/profile", {
        auth: { username, password }
      });

      setUserProfileData(res.data);
    } catch (err) {
      setError("Failed to fetch user profile");
      console.error(err);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const username = sessionStorage.getItem("username");
  const role = sessionStorage.getItem("role");

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4">
            <AdminPanelSettingsIcon sx={{ mr: 1, verticalAlign: 'middle', color: 'error.main' }} />
            Admin Dashboard
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

        <Card sx={{ mb: 3, bgcolor: 'error.light', color: 'white' }}>
          <CardContent>
            <Typography variant="h6">Welcome, {username}!</Typography>
            <Typography variant="body2">Role: {role} (Full Access)</Typography>
          </CardContent>
        </Card>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              color="error"
              onClick={fetchAdminData}
              fullWidth
              size="large"
            >
              Get Admin Dashboard Data
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              color="success"
              onClick={fetchUserProfile}
              fullWidth
              size="large"
            >
              Get User Profile (Also Accessible)
            </Button>
          </Grid>
        </Grid>

        {adminData && (
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="error">
                Admin Data:
              </Typography>
              <pre style={{ background: '#ffebee', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
                {JSON.stringify(adminData, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}

        {userProfileData && (
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="success.main">
                User Profile Data:
              </Typography>
              <pre style={{ background: '#e8f5e9', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
                {JSON.stringify(userProfileData, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}

        <Box sx={{ mt: 3, p: 2, bgcolor: 'success.light', borderRadius: 1 }}>
          <Typography variant="body2" color="white">
            ✅ As an ADMIN, you have full access to both user and admin endpoints.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default AdminDashboard;
