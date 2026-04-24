# 📮 COPY-PASTE ENDPOINTS FOR POSTMAN

**Server is running on:** http://localhost:8080

---

## 🎯 REQUIRED SCREENSHOTS (4 Minimum)

### ⭐ Screenshot 1: USER accessing USER endpoint (200 OK)
**Method:** GET  
**URL:** 
```
http://localhost:8080/api/user/profile
```
**Authorization:** Basic Auth  
**Username:** `user1`  
**Password:** `user123`  
**Expected:** ✅ 200 OK  
**Save as:** `01-user-success.png`

---

### ⭐ Screenshot 2: USER accessing ADMIN endpoint (403 Forbidden)
**Method:** GET  
**URL:** 
```
http://localhost:8080/api/admin/dashboard
```
**Authorization:** Basic Auth  
**Username:** `user1`  
**Password:** `user123`  
**Expected:** ❌ 403 Forbidden  
**Save as:** `02-user-forbidden.png`

---

### ⭐ Screenshot 3: ADMIN accessing ADMIN endpoint (200 OK)
**Method:** GET  
**URL:** 
```
http://localhost:8080/api/admin/dashboard
```
**Authorization:** Basic Auth  
**Username:** `admin1`  
**Password:** `admin123`  
**Expected:** ✅ 200 OK  
**Save as:** `03-admin-success.png`

---

### ⭐ Screenshot 4: No Authentication (401 Unauthorized)
**Method:** GET  
**URL:** 
```
http://localhost:8080/api/user/profile
```
**Authorization:** No Auth  
**Expected:** ❌ 401 Unauthorized  
**Save as:** `04-unauthorized.png`

---

## 📋 BONUS SCREENSHOTS (Optional)

### Screenshot 5: Public Endpoint (No Auth Required)
**Method:** GET  
**URL:** 
```
http://localhost:8080/api/public/hello
```
**Authorization:** No Auth  
**Expected:** ✅ 200 OK  
**Save as:** `05-public.png`

---

### Screenshot 6: ADMIN accessing USER endpoint (200 OK)
**Method:** GET  
**URL:** 
```
http://localhost:8080/api/user/profile
```
**Authorization:** Basic Auth  
**Username:** `admin1`  
**Password:** `admin123`  
**Expected:** ✅ 200 OK  
**Save as:** `06-admin-user-endpoint.png`

---

### Screenshot 7: Invalid Credentials (401 Unauthorized)
**Method:** GET  
**URL:** 
```
http://localhost:8080/api/user/profile
```
**Authorization:** Basic Auth  
**Username:** `user1`  
**Password:** `wrongpassword`  
**Expected:** ❌ 401 Unauthorized  
**Save as:** `07-invalid-credentials.png`

---

## 🔑 CREDENTIALS

| Username | Password | Role |
|----------|----------|------|
| user1 | user123 | USER |
| admin1 | admin123 | ADMIN |

---

## 📸 HOW TO SET BASIC AUTH IN POSTMAN

1. Click **Authorization** tab (below URL bar)
2. Select **Basic Auth** from dropdown
3. Enter username and password
4. Click **Send**

---

## ✅ ALL ENDPOINTS AT A GLANCE

```
PUBLIC (No Auth):
http://localhost:8080/api/public/hello

USER ENDPOINTS (user1/user123 OR admin1/admin123):
http://localhost:8080/api/user/profile
http://localhost:8080/api/user/dashboard

ADMIN ENDPOINTS (admin1/admin123 ONLY):
http://localhost:8080/api/admin/dashboard
http://localhost:8080/api/admin/users
```

---

**🎉 Just copy-paste and take screenshots!**
