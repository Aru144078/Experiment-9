# 📸 Screenshot Guide - Experiment 9

## 🚀 Servers Running

✅ **Backend:** http://localhost:8080 (Spring Boot)  
✅ **Frontend:** http://localhost:3002 (React)

---

## 📋 Required Screenshots (6 Total)

### ⭐ Screenshot 1: Login UI
**What to capture:**
- Login page with username/password fields
- Test credentials box visible
- Clean, professional UI

**Steps:**
1. Open http://localhost:3002
2. Take full-page screenshot
3. Save as: `01-login-page.png`

---

### ⭐ Screenshot 2: USER Dashboard - Success
**What to capture:**
- USER logged in successfully
- User dashboard showing
- Click "Get My Profile" button
- Profile data displayed

**Steps:**
1. Login with: `user1` / `user123`
2. Click "Get My Profile"
3. Wait for response
4. Take screenshot showing JSON response
5. Save as: `02-user-dashboard-success.png`

---

### ⭐ Screenshot 3: USER Denied Admin Access (403)
**What to capture:**
- USER trying to access admin endpoint
- Red error message showing "Access Denied"
- 403 Forbidden error visible

**Steps:**
1. Still logged in as user1
2. Click "Try Admin Access (Will Fail)"
3. Wait for error message
4. Take screenshot showing red error alert
5. Save as: `03-user-denied-403.png`

---

### ⭐ Screenshot 4: ADMIN Dashboard - Success
**What to capture:**
- ADMIN logged in
- Admin dashboard showing
- Admin data displayed successfully

**Steps:**
1. Logout (click Logout button)
2. Login with: `admin1` / `admin123`
3. Click "Get Admin Dashboard Data"
4. Wait for response
5. Take screenshot showing admin JSON data
6. Save as: `04-admin-dashboard-success.png`

---

### ⭐ Screenshot 5: Session Storage
**What to capture:**
- Browser DevTools showing sessionStorage
- username, password, and role visible

**Steps:**
1. While logged in (as either user)
2. Press F12 (or Cmd+Option+I on Mac)
3. Go to "Application" tab
4. Click "Session Storage" → "http://localhost:3002"
5. Show username, password, role entries
6. Take screenshot
7. Save as: `05-session-storage.png`

---

### ⭐ Screenshot 6: ADMIN Accessing User Endpoint
**What to capture:**
- ADMIN successfully accessing user endpoint
- Shows ADMIN has full access

**Steps:**
1. Logged in as admin1
2. Click "Get User Profile (Also Accessible)"
3. Wait for response
4. Take screenshot showing successful response
5. Save as: `06-admin-user-access.png`

---

## 🎯 Quick Test Flow

### Test 1: USER Flow
```
1. Open http://localhost:3002
2. Login: user1 / user123
3. Click "Get My Profile" → ✅ Success
4. Click "Try Admin Access" → ❌ 403 Forbidden
5. Take screenshots 2 & 3
```

### Test 2: ADMIN Flow
```
1. Logout
2. Login: admin1 / admin123
3. Click "Get Admin Dashboard Data" → ✅ Success
4. Click "Get User Profile" → ✅ Success (ADMIN can access both)
5. Take screenshots 4 & 6
```

### Test 3: Session Storage
```
1. Press F12
2. Application → Session Storage
3. Take screenshot 5
```

---

## 📁 Save Screenshots To:

```
/Users/Personall/Desktop/Experiment-7/frontend/screenshots/
```

Create this folder if it doesn't exist:
```bash
mkdir -p /Users/Personall/Desktop/Experiment-7/frontend/screenshots
```

---

## ✅ Screenshot Checklist

- [ ] 01-login-page.png
- [ ] 02-user-dashboard-success.png
- [ ] 03-user-denied-403.png
- [ ] 04-admin-dashboard-success.png
- [ ] 05-session-storage.png
- [ ] 06-admin-user-access.png

---

## 🎨 What Makes a Good Screenshot

✅ Full browser window visible  
✅ URL bar showing correct address  
✅ Response data clearly visible  
✅ Error messages highlighted  
✅ No unnecessary clutter  
✅ High resolution/clarity  

---

## 🔑 Test Credentials Reminder

| Username | Password | Role | Dashboard |
|----------|----------|------|-----------|
| user1 | user123 | USER | /user |
| admin1 | admin123 | ADMIN | /admin |

---

**🎉 Ready to take screenshots!**

Both servers are running. Just open http://localhost:3002 and follow the steps above!
