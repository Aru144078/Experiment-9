# 🎨 Experiment 9: Frontend Integration with RBAC

**React Frontend for Role-Based Authorization**

---

## 📋 Overview

This is a React frontend that integrates with the Spring Boot RBAC backend (Experiment 7). It demonstrates:

- ✅ Session-based authentication
- ✅ Role-based UI components
- ✅ USER and ADMIN dashboards
- ✅ Protected routes
- ✅ Material UI + Bootstrap design

---

## 🚀 Quick Start

### 1. Start Backend Server (Experiment 7)
```bash
cd /Users/Personall/Desktop/Experiment-7
mvn spring-boot:run
```
Backend runs on: **http://localhost:8080**

### 2. Start Frontend
```bash
cd /Users/Personall/Desktop/Experiment-7/frontend
npm start
```
Frontend runs on: **http://localhost:3000**

---

## 🔑 Test Credentials

| Username | Password | Role | Access |
|----------|----------|------|--------|
| user1 | user123 | USER | User endpoints only |
| admin1 | admin123 | ADMIN | All endpoints |

---

## 📱 Features

### 1. Login Page (`/`)
- Username and password input
- Authentication via backend API
- Stores credentials in sessionStorage
- Redirects based on role

### 2. User Dashboard (`/user`)
- Access user profile endpoint
- Attempt admin access (will fail with 403)
- Display profile data
- Logout functionality

### 3. Admin Dashboard (`/admin`)
- Access admin dashboard endpoint
- Access user endpoints (ADMIN can access both)
- Display admin data
- Full access demonstration

---

## 🛠️ Tech Stack

- **React** 18
- **React Router** v6
- **Material UI** (MUI)
- **Bootstrap** 5
- **Axios** for HTTP requests
- **Session Storage** for auth

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Login.js              # Login page
│   │   ├── UserDashboard.js      # USER role dashboard
│   │   └── AdminDashboard.js     # ADMIN role dashboard
│   ├── App.js                    # Main app with routing
│   ├── index.js                  # Entry point
│   └── index.css                 # Global styles
├── package.json
└── README_EXPERIMENT9.md
```

---

## 🎯 How It Works

### Authentication Flow

1. **User enters credentials** on login page
2. **Frontend calls** `GET /api/user/profile` with Basic Auth
3. **If successful:**
   - Store username, password, role in sessionStorage
   - Redirect to appropriate dashboard
4. **If failed:**
   - Show error message

### Role-Based Access

```javascript
// Stored in sessionStorage
{
  username: "user1",
  password: "user123",
  role: "USER" or "ADMIN"
}
```

### API Calls

```javascript
axios.get("http://localhost:8080/api/user/profile", {
  auth: {
    username: sessionStorage.getItem("username"),
    password: sessionStorage.getItem("password")
  }
});
```

---

## 📸 Required Screenshots

### Screenshot 1: Login UI
- Show login page with username/password fields
- Display test credentials

### Screenshot 2: USER Dashboard
- USER logged in
- Successfully accessing user endpoint
- Profile data displayed

### Screenshot 3: USER Denied Admin Access
- USER trying to access admin endpoint
- 403 Forbidden error shown

### Screenshot 4: ADMIN Dashboard
- ADMIN logged in
- Successfully accessing admin endpoint
- Admin data displayed

### Screenshot 5: Session Storage
- Open browser DevTools → Application → Session Storage
- Show stored username, password, role

### Screenshot 6: ADMIN Accessing User Endpoint
- ADMIN can access both user and admin endpoints
- Show successful response

---

## 🔐 Security Features

### Session-Based Auth
- Credentials stored in sessionStorage
- Cleared on logout
- Checked on component mount

### Route Protection
```javascript
useEffect(() => {
  const role = sessionStorage.getItem("role");
  if (!role) {
    navigate("/");
  }
}, [navigate]);
```

### Role-Based UI
- USER: Cannot see admin features
- ADMIN: Full access to all features

---

## 🧪 Testing Guide

### Test 1: USER Login
1. Go to http://localhost:3000
2. Login with: `user1` / `user123`
3. Should redirect to `/user`
4. Click "Get My Profile" → Success
5. Click "Try Admin Access" → 403 Forbidden

### Test 2: ADMIN Login
1. Logout and return to login
2. Login with: `admin1` / `admin123`
3. Should redirect to `/admin`
4. Click "Get Admin Dashboard Data" → Success
5. Click "Get User Profile" → Success (ADMIN can access both)

### Test 3: Unauthorized Access
1. Clear sessionStorage
2. Try to access `/user` or `/admin` directly
3. Should redirect to login

---

## 🎨 UI Components

### Material UI Components Used
- Container
- TextField
- Button
- Typography
- Box
- Card
- CardContent
- Alert
- Grid
- Icons (Person, AdminPanelSettings, Logout)

### Bootstrap
- Used for additional styling
- Grid system
- Utility classes

---

## 🐛 Troubleshooting

### Issue: CORS Error
**Solution:** Backend should allow CORS from http://localhost:3000

### Issue: 401 Unauthorized
**Solution:** Check credentials in sessionStorage are correct

### Issue: Cannot access endpoints
**Solution:** Ensure backend is running on port 8080

---

## ✅ Submission Checklist

- [ ] Frontend runs successfully
- [ ] Login works for both USER and ADMIN
- [ ] USER dashboard shows correct access control
- [ ] ADMIN dashboard shows full access
- [ ] Session storage visible in DevTools
- [ ] 6 screenshots captured
- [ ] Code pushed to GitHub
- [ ] README completed

---

## 🎓 Learning Outcomes

After completing this experiment, you understand:

✅ How to integrate React with Spring Boot backend  
✅ Session-based authentication in React  
✅ Role-based UI rendering  
✅ Protected routes with React Router  
✅ HTTP Basic Authentication with Axios  
✅ Material UI and Bootstrap integration  

---

**🎉 Experiment 9 Complete!**

Frontend successfully integrated with RBAC backend.
