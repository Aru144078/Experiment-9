# 📮 Postman Testing Guide - Experiment 7

Complete step-by-step guide for testing Role-Based Authorization using Postman.

---

## 🚀 Setup

1. **Start the Application**
   ```bash
   cd /Users/Personall/Desktop/Experiment-7
   mvn spring-boot:run
   ```
   
2. **Open Postman**
   - Download from: https://www.postman.com/downloads/
   - Or use Postman Web

3. **Create New Collection**
   - Click "New" → "Collection"
   - Name it: "Experiment 7 - RBAC"

---

## 📋 Test Cases

### Test 1: Public Endpoint (No Authentication) ✅

**Purpose:** Verify public endpoints are accessible without authentication

**Steps:**
1. Create new request in Postman
2. Set method to: **GET**
3. Enter URL: `http://localhost:8080/api/public/hello`
4. Go to **Authorization** tab
5. Select: **No Auth**
6. Click **Send**

**Expected Result:**
- Status: `200 OK`
- Response:
  ```json
  {
    "message": "This is a public endpoint",
    "access": "No authentication required"
  }
  ```

**Screenshot:** Save as `01-public-endpoint.png`

---

### Test 2: No Authentication on Protected Endpoint ❌

**Purpose:** Demonstrate 401 Unauthorized when no credentials provided

**Steps:**
1. Create new request
2. Set method to: **GET**
3. Enter URL: `http://localhost:8080/api/user/profile`
4. Authorization: **No Auth**
5. Click **Send**

**Expected Result:**
- Status: `401 Unauthorized`
- Response: Authentication error

**Screenshot:** Save as `02-unauthorized-401.png`

---

### Test 3: USER Login and Access User Endpoint ✅

**Purpose:** Show USER role can access user endpoints

**Steps:**
1. Create new request
2. Set method to: **GET**
3. Enter URL: `http://localhost:8080/api/user/profile`
4. Go to **Authorization** tab
5. Select: **Basic Auth**
6. Enter:
   - Username: `user1`
   - Password: `user123`
7. Click **Send**

**Expected Result:**
- Status: `200 OK`
- Response:
  ```json
  {
    "message": "Welcome, authenticated user",
    "username": "user1",
    "authorities": [
      {
        "authority": "ROLE_USER"
      }
    ],
    "access": "USER and ADMIN can access this endpoint"
  }
  ```

**Screenshot:** Save as `03-user-access-success.png` ⭐ **REQUIRED**

---

### Test 4: USER Accessing Admin Endpoint ❌

**Purpose:** Demonstrate 403 Forbidden when USER tries to access ADMIN endpoint

**Steps:**
1. Create new request
2. Set method to: **GET**
3. Enter URL: `http://localhost:8080/api/admin/dashboard`
4. Authorization: **Basic Auth**
   - Username: `user1`
   - Password: `user123`
5. Click **Send**

**Expected Result:**
- Status: `403 Forbidden`
- Response: Access denied error

**Screenshot:** Save as `04-user-forbidden-403.png` ⭐ **REQUIRED**

---

### Test 5: ADMIN Accessing Admin Endpoint ✅

**Purpose:** Show ADMIN role can access admin endpoints

**Steps:**
1. Create new request
2. Set method to: **GET**
3. Enter URL: `http://localhost:8080/api/admin/dashboard`
4. Authorization: **Basic Auth**
   - Username: `admin1`
   - Password: `admin123`
5. Click **Send**

**Expected Result:**
- Status: `200 OK`
- Response:
  ```json
  {
    "message": "Welcome, admin",
    "username": "admin1",
    "authorities": [
      {
        "authority": "ROLE_ADMIN"
      }
    ],
    "access": "Only ADMIN can access this endpoint"
  }
  ```

**Screenshot:** Save as `05-admin-access-success.png` ⭐ **REQUIRED**

---

### Test 6: ADMIN Accessing User Endpoint ✅

**Purpose:** Show ADMIN can also access user endpoints

**Steps:**
1. Create new request
2. Set method to: **GET**
3. Enter URL: `http://localhost:8080/api/user/profile`
4. Authorization: **Basic Auth**
   - Username: `admin1`
   - Password: `admin123`
5. Click **Send**

**Expected Result:**
- Status: `200 OK`
- ADMIN can access USER endpoints

**Screenshot:** Save as `06-admin-access-user-endpoint.png`

---

### Test 7: Invalid Credentials ❌

**Purpose:** Show authentication failure with wrong credentials

**Steps:**
1. Create new request
2. Set method to: **GET**
3. Enter URL: `http://localhost:8080/api/user/profile`
4. Authorization: **Basic Auth**
   - Username: `user1`
   - Password: `wrongpassword`
5. Click **Send**

**Expected Result:**
- Status: `401 Unauthorized`
- Invalid credentials error

**Screenshot:** Save as `07-invalid-credentials.png`

---

## 📊 Summary Table

| Test # | Endpoint | User | Expected Status | Purpose |
|--------|----------|------|----------------|---------|
| 1 | `/api/public/hello` | None | 200 OK | Public access |
| 2 | `/api/user/profile` | None | 401 Unauthorized | No auth |
| 3 | `/api/user/profile` | user1 | 200 OK | USER access |
| 4 | `/api/admin/dashboard` | user1 | 403 Forbidden | USER denied |
| 5 | `/api/admin/dashboard` | admin1 | 200 OK | ADMIN access |
| 6 | `/api/user/profile` | admin1 | 200 OK | ADMIN can access user |
| 7 | `/api/user/profile` | Invalid | 401 Unauthorized | Wrong password |

---

## 📸 Screenshot Requirements

### Minimum Required (4 screenshots):
1. ⭐ **USER accessing user endpoint** (200 OK)
2. ⭐ **USER denied admin endpoint** (403 Forbidden)
3. ⭐ **ADMIN accessing admin endpoint** (200 OK)
4. ⭐ **No authentication** (401 Unauthorized)

### Recommended Additional Screenshots:
5. Public endpoint access
6. Invalid credentials
7. ADMIN accessing user endpoint
8. H2 console showing users

---

## 🎯 What to Capture in Screenshots

Each screenshot should show:
- ✅ Request URL
- ✅ HTTP Method (GET)
- ✅ Authorization tab (showing credentials or No Auth)
- ✅ Response status code (200, 401, 403)
- ✅ Response body (JSON)
- ✅ Headers (optional but helpful)

---

## 💡 Tips for Better Screenshots

1. **Full Window:** Capture entire Postman window
2. **Clear Text:** Make sure all text is readable
3. **Highlight Important:** Circle or highlight status codes
4. **Organized:** Name files clearly (01, 02, 03, etc.)
5. **Professional:** Clean, uncluttered screenshots

---

## 🔧 Troubleshooting

### Issue: Connection Refused
**Solution:** Make sure application is running on port 8080

### Issue: Always getting 401
**Solution:** 
- Check username/password are correct
- Make sure Authorization tab is set to Basic Auth
- Verify credentials: user1/user123 or admin1/admin123

### Issue: Getting 403 instead of 200
**Solution:**
- Check you're using correct user for the endpoint
- USER cannot access /api/admin/**
- Verify role in database

### Issue: Can't see response
**Solution:**
- Check "Body" tab in response section
- Make sure "Pretty" is selected for JSON formatting

---

## 📋 Testing Checklist

Before submission, verify:

- [ ] All 7 test cases executed
- [ ] 4 required screenshots captured
- [ ] Screenshots saved in `screenshots/` folder
- [ ] File names are clear and organized
- [ ] All screenshots show status codes clearly
- [ ] Response bodies are visible
- [ ] Authorization settings visible in screenshots

---

## 🎓 Understanding the Results

### 200 OK
- Request successful
- User has proper authentication and authorization
- Endpoint accessible to user's role

### 401 Unauthorized
- No authentication provided
- Invalid credentials
- Need to login first

### 403 Forbidden
- User is authenticated (logged in)
- But doesn't have permission for this resource
- Role insufficient for endpoint

---

**Happy Testing! 🚀**

Remember to capture clear screenshots for your submission!
