# 🚀 Quick Start Guide - Experiment 7

## ⚡ How to Run the Application

### Step 1: Open Terminal
Navigate to your project directory:
```bash
cd /Users/Personall/Desktop/Experiment-7
```

### Step 2: Start the Application
Run this command:
```bash
mvn spring-boot:run
```

**Wait for this message:**
```
Started Experiment7Application in X.XXX seconds
```

The application is now running on: **http://localhost:8080**

---

## 📮 What to Put in Postman - Step by Step

### 🔧 Initial Setup
1. Download Postman from: https://www.postman.com/downloads/
2. Open Postman
3. Create a new Collection called "Experiment 7"

---

## 📋 Test Cases (Copy-Paste Ready)

### ✅ Test 1: Public Endpoint (No Login Required)

**In Postman:**
1. Click **New Request**
2. Method: **GET**
3. URL: `http://localhost:8080/api/public/hello`
4. Authorization tab: Select **No Auth**
5. Click **Send**

**Expected Result:** ✅ 200 OK
```json
{
  "message": "This is a public endpoint",
  "access": "No authentication required"
}
```

**Screenshot:** Save this as `01-public-endpoint.png`

---

### ✅ Test 2: USER Accessing User Endpoint (SUCCESS)

**In Postman:**
1. New Request
2. Method: **GET**
3. URL: `http://localhost:8080/api/user/profile`
4. Go to **Authorization** tab
5. Type: Select **Basic Auth**
6. Username: `user1`
7. Password: `user123`
8. Click **Send**

**Expected Result:** ✅ 200 OK
```json
{
  "message": "Welcome, authenticated user",
  "username": "user1",
  "authorities": [{"authority": "ROLE_USER"}],
  "access": "USER and ADMIN can access this endpoint"
}
```

**Screenshot:** ⭐ **REQUIRED** - Save as `02-user-success.png`

---

### ❌ Test 3: USER Accessing Admin Endpoint (FORBIDDEN)

**In Postman:**
1. New Request
2. Method: **GET**
3. URL: `http://localhost:8080/api/admin/dashboard`
4. Authorization: **Basic Auth**
5. Username: `user1`
6. Password: `user123`
7. Click **Send**

**Expected Result:** ❌ 403 Forbidden
```json
{
  "timestamp": "...",
  "status": 403,
  "error": "Forbidden",
  "message": "Access Denied",
  "path": "/api/admin/dashboard"
}
```

**Screenshot:** ⭐ **REQUIRED** - Save as `03-user-forbidden.png`

---

### ✅ Test 4: ADMIN Accessing Admin Endpoint (SUCCESS)

**In Postman:**
1. New Request
2. Method: **GET**
3. URL: `http://localhost:8080/api/admin/dashboard`
4. Authorization: **Basic Auth**
5. Username: `admin1`
6. Password: `admin123`
7. Click **Send**

**Expected Result:** ✅ 200 OK
```json
{
  "message": "Welcome, admin",
  "username": "admin1",
  "authorities": [{"authority": "ROLE_ADMIN"}],
  "access": "Only ADMIN can access this endpoint"
}
```

**Screenshot:** ⭐ **REQUIRED** - Save as `04-admin-success.png`

---

### ❌ Test 5: No Authentication (UNAUTHORIZED)

**In Postman:**
1. New Request
2. Method: **GET**
3. URL: `http://localhost:8080/api/user/profile`
4. Authorization: **No Auth**
5. Click **Send**

**Expected Result:** ❌ 401 Unauthorized

**Screenshot:** ⭐ **REQUIRED** - Save as `05-unauthorized.png`

---

## 🎯 Quick Reference Table

| Test | URL | Username | Password | Expected Status |
|------|-----|----------|----------|----------------|
| 1 | `/api/public/hello` | None | None | 200 OK |
| 2 | `/api/user/profile` | user1 | user123 | 200 OK |
| 3 | `/api/admin/dashboard` | user1 | user123 | 403 Forbidden |
| 4 | `/api/admin/dashboard` | admin1 | admin123 | 200 OK |
| 5 | `/api/user/profile` | None | None | 401 Unauthorized |

---

## 📸 Screenshot Checklist

You need **minimum 4 screenshots**:

- [ ] ⭐ USER accessing user endpoint (200 OK)
- [ ] ⭐ USER denied admin endpoint (403 Forbidden)
- [ ] ⭐ ADMIN accessing admin endpoint (200 OK)
- [ ] ⭐ No authentication (401 Unauthorized)

**Bonus screenshots:**
- [ ] Public endpoint
- [ ] Invalid credentials
- [ ] Project structure

---

## 🔍 How to Set Basic Auth in Postman

### Visual Guide:

1. **Authorization Tab**
   - Click on the "Authorization" tab (below the URL bar)

2. **Select Type**
   - In the "Type" dropdown, select **"Basic Auth"**

3. **Enter Credentials**
   - Username field: Type `user1` or `admin1`
   - Password field: Type `user123` or `admin123`

4. **Send Request**
   - Click the blue "Send" button

5. **View Response**
   - Check the "Body" tab below
   - Status code appears in top right (200, 401, 403)

---

## 🎨 What Your Screenshot Should Show

Each screenshot must include:
- ✅ The URL in the address bar
- ✅ The HTTP method (GET)
- ✅ The Authorization tab (showing credentials or No Auth)
- ✅ The status code (200, 401, or 403)
- ✅ The response body (JSON)

**Example Layout:**
```
┌─────────────────────────────────────────┐
│ GET  http://localhost:8080/api/...     │ ← URL
├─────────────────────────────────────────┤
│ Authorization | Headers | Body          │
│ Type: Basic Auth                        │ ← Auth Settings
│ Username: user1                         │
│ Password: user123                       │
├─────────────────────────────────────────┤
│                                  200 OK │ ← Status Code
├─────────────────────────────────────────┤
│ Response Body:                          │
│ {                                       │ ← Response
│   "message": "Welcome...",              │
│   "username": "user1"                   │
│ }                                       │
└─────────────────────────────────────────┘
```

---

## 🐛 Common Issues & Solutions

### Issue: "Connection refused" or "Could not connect"
**Solution:** Make sure the application is running
```bash
mvn spring-boot:run
```

### Issue: Always getting 401 Unauthorized
**Solutions:**
- Make sure you selected **Basic Auth** (not No Auth)
- Check username and password are correct
- Verify credentials: `user1/user123` or `admin1/admin123`

### Issue: Can't see the response
**Solution:**
- Click the "Body" tab in the response section
- Select "Pretty" for formatted JSON

### Issue: Port 8080 already in use
**Solution:**
```bash
lsof -ti:8080 | xargs kill -9
mvn spring-boot:run
```

---

## 📝 Testing Order (Recommended)

1. **Start Application** → `mvn spring-boot:run`
2. **Test Public Endpoint** → No auth needed
3. **Test USER Login** → user1/user123 on /api/user/profile
4. **Test USER Forbidden** → user1/user123 on /api/admin/dashboard
5. **Test ADMIN Access** → admin1/admin123 on /api/admin/dashboard
6. **Test No Auth** → No credentials on /api/user/profile

---

## 🎓 Understanding the Status Codes

### 200 OK ✅
- **Meaning:** Success!
- **Why:** You have correct credentials AND correct role
- **Example:** USER accessing /api/user/profile

### 401 Unauthorized ❌
- **Meaning:** Who are you?
- **Why:** No credentials provided or wrong password
- **Example:** Accessing /api/user/profile without login

### 403 Forbidden 🚫
- **Meaning:** I know who you are, but you can't access this
- **Why:** Correct login but insufficient role
- **Example:** USER trying to access /api/admin/dashboard

---

## 🎯 Final Checklist Before Submission

- [ ] Application runs without errors
- [ ] All 5 test cases completed
- [ ] 4 required screenshots captured
- [ ] Screenshots saved in `screenshots/` folder
- [ ] Files named clearly (01, 02, 03, 04, 05)
- [ ] All screenshots show status codes clearly
- [ ] Response bodies are visible
- [ ] Authorization settings visible

---

## 📧 Test Credentials Summary

### Regular User
- Username: `user1`
- Password: `user123`
- Role: `ROLE_USER`
- Can access: `/api/public/**` and `/api/user/**`
- Cannot access: `/api/admin/**`

### Admin User
- Username: `admin1`
- Password: `admin123`
- Role: `ROLE_ADMIN`
- Can access: Everything (public, user, and admin endpoints)

---

**🎉 You're Ready to Test!**

1. Run: `mvn spring-boot:run`
2. Open Postman
3. Follow the test cases above
4. Capture screenshots
5. Submit to Google Form

**Good luck! 🚀**
