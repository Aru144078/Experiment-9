# 🔐 Experiment 7: Role-Based Authorization (RBAC)

**Implementation of Role-Based Access Control using Spring Security**

---

## 📋 Project Overview

This project demonstrates **Role-Based Authorization (RBAC)** using Spring Boot and Spring Security. It implements authentication and authorization with two roles: **USER** and **ADMIN**, showing how different users have different levels of access to API endpoints.

---

## 🎯 Objectives

✅ Implement user authentication using Spring Security  
✅ Configure role-based access control (RBAC)  
✅ Create protected APIs accessible based on assigned roles  
✅ Demonstrate authorization using Postman  
✅ Show proper HTTP responses for unauthorized (401) and forbidden (403) access  

---

## 💻 Technology Stack

- **Spring Boot** 3.2.5
- **Spring Security** 6.x
- **Spring Data JPA**
- **H2 Database** (in-memory)
- **Lombok**
- **Maven**
- **Java** 17

---

## 🚀 Quick Start

### Prerequisites
- Java 17 or higher
- Maven 3.6+
- Postman (for API testing)

### 1. Clone/Navigate to Project
```bash
cd /Users/Personall/Desktop/Experiment-7
```

### 2. Run the Application
```bash
mvn spring-boot:run
```

The application will start on: **http://localhost:8080**

---

## 🔐 Test Users

| Username | Password | Role | Access Level |
|----------|----------|------|--------------|
| user1 | user123 | USER | Public + User endpoints |
| admin1 | admin123 | ADMIN | All endpoints |

**Note:** Passwords are stored using BCrypt encryption in the database.

---

## 🌐 API Endpoints

### 1. Public Endpoints (No Authentication Required)

#### GET /api/public/hello
- **Access:** Everyone
- **Description:** Public endpoint accessible without authentication

**Example Request:**
```http
GET http://localhost:8080/api/public/hello
```

**Response:**
```json
{
  "message": "This is a public endpoint",
  "access": "No authentication required"
}
```

---

### 2. User Endpoints (Requires USER or ADMIN Role)

#### GET /api/user/profile
- **Access:** USER, ADMIN
- **Description:** User profile information

**Example Request:**
```http
GET http://localhost:8080/api/user/profile
Authorization: Basic user1:user123
```

**Response:**
```json
{
  "message": "Welcome, authenticated user",
  "username": "user1",
  "authorities": [{"authority": "ROLE_USER"}],
  "access": "USER and ADMIN can access this endpoint"
}
```

#### GET /api/user/dashboard
- **Access:** USER, ADMIN
- **Description:** User dashboard

---

### 3. Admin Endpoints (Requires ADMIN Role Only)

#### GET /api/admin/dashboard
- **Access:** ADMIN only
- **Description:** Admin dashboard

**Example Request:**
```http
GET http://localhost:8080/api/admin/dashboard
Authorization: Basic admin1:admin123
```

**Response:**
```json
{
  "message": "Welcome, admin",
  "username": "admin1",
  "authorities": [{"authority": "ROLE_ADMIN"}],
  "access": "Only ADMIN can access this endpoint"
}
```

#### GET /api/admin/users
- **Access:** ADMIN only
- **Description:** User management endpoint

---

## 🧪 Testing with Postman

### Test Case 1: Public Endpoint (No Auth)
1. **Method:** GET
2. **URL:** `http://localhost:8080/api/public/hello`
3. **Authorization:** None
4. **Expected:** ✅ 200 OK

---

### Test Case 2: USER Accessing User Endpoint
1. **Method:** GET
2. **URL:** `http://localhost:8080/api/user/profile`
3. **Authorization:** Basic Auth
   - Username: `user1`
   - Password: `user123`
4. **Expected:** ✅ 200 OK

**Steps in Postman:**
- Go to **Authorization** tab
- Select **Basic Auth**
- Enter username: `user1`
- Enter password: `user123`
- Click **Send**

---

### Test Case 3: USER Accessing Admin Endpoint (Forbidden)
1. **Method:** GET
2. **URL:** `http://localhost:8080/api/admin/dashboard`
3. **Authorization:** Basic Auth (user1/user123)
4. **Expected:** ❌ 403 Forbidden

**This demonstrates that USER role cannot access ADMIN endpoints!**

---

### Test Case 4: ADMIN Accessing Admin Endpoint
1. **Method:** GET
2. **URL:** `http://localhost:8080/api/admin/dashboard`
3. **Authorization:** Basic Auth
   - Username: `admin1`
   - Password: `admin123`
4. **Expected:** ✅ 200 OK

---

### Test Case 5: No Authentication (Unauthorized)
1. **Method:** GET
2. **URL:** `http://localhost:8080/api/user/profile`
3. **Authorization:** None
4. **Expected:** ❌ 401 Unauthorized

**This shows that protected endpoints require authentication!**

---

## 📸 Required Screenshots

Capture these screenshots for your submission:

### 1. Login/Authentication Success
- Postman request showing successful authentication
- Response with user details

### 2. USER Accessing User Endpoint
- Request to `/api/user/profile` with user1 credentials
- 200 OK response

### 3. USER Denied Access to Admin Endpoint
- Request to `/api/admin/dashboard` with user1 credentials
- 403 Forbidden response

### 4. ADMIN Accessing Admin Endpoint
- Request to `/api/admin/dashboard` with admin1 credentials
- 200 OK response

### Bonus Screenshots:
- Public endpoint access (no auth)
- 401 Unauthorized (no credentials)
- H2 console showing users table
- Project folder structure

---

## 📁 Project Structure

```
Experiment-7/
├── src/
│   ├── main/
│   │   ├── java/com/example/experiment7/
│   │   │   ├── config/
│   │   │   │   └── SecurityConfig.java          # Security configuration
│   │   │   ├── controller/
│   │   │   │   ├── PublicController.java        # Public endpoints
│   │   │   │   ├── UserController.java          # User endpoints
│   │   │   │   └── AdminController.java         # Admin endpoints
│   │   │   ├── entity/
│   │   │   │   └── User.java                    # User entity
│   │   │   ├── repository/
│   │   │   │   └── UserRepository.java          # User repository
│   │   │   ├── service/
│   │   │   │   └── CustomUserDetailsService.java # User details service
│   │   │   └── Experiment7Application.java      # Main application
│   │   └── resources/
│   │       ├── application.properties            # Configuration
│   │       └── data.sql                          # Test users
│   └── test/
├── screenshots/                                   # Your screenshots here
├── pom.xml                                        # Maven dependencies
├── README.md                                      # This file
└── POSTMAN_TESTING_GUIDE.md                      # Detailed testing guide
```

---

## 🔒 Security Configuration

### Access Rules

| Endpoint Pattern | Required Role | Description |
|-----------------|---------------|-------------|
| `/api/public/**` | None | Public access |
| `/h2-console/**` | None | H2 database console |
| `/api/user/**` | USER, ADMIN | User endpoints |
| `/api/admin/**` | ADMIN | Admin-only endpoints |
| All others | Authenticated | Requires login |

### Authentication Method
- **HTTP Basic Authentication**
- Username and password sent in Authorization header
- Passwords encrypted with BCrypt

---

## 🗄️ Database

### H2 Console Access
- **URL:** http://localhost:8080/h2-console
- **JDBC URL:** `jdbc:h2:mem:experiment7db`
- **Username:** `sa`
- **Password:** (leave empty)

### Users Table
```sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);
```

---

## 🎓 Key Concepts Demonstrated

### 1. Authentication vs Authorization
- **Authentication:** Verifying who you are (login)
- **Authorization:** Verifying what you can access (roles)

### 2. HTTP Status Codes
- **200 OK:** Successful request
- **401 Unauthorized:** No authentication provided
- **403 Forbidden:** Authenticated but insufficient permissions

### 3. Role-Based Access Control (RBAC)
- Users assigned specific roles
- Endpoints protected based on roles
- Spring Security enforces access rules

### 4. Spring Security Features
- `@EnableWebSecurity`: Enables Spring Security
- `@EnableMethodSecurity`: Enables method-level security
- `SecurityFilterChain`: Configures security rules
- `UserDetailsService`: Loads user information
- `PasswordEncoder`: Encrypts passwords

---

## 🐛 Troubleshooting

### Issue: Application won't start
**Solution:** Make sure Java 17 is installed and JAVA_HOME is set correctly

### Issue: 401 Unauthorized on all endpoints
**Solution:** Check that you're providing credentials in Postman (Authorization → Basic Auth)

### Issue: Users not found
**Solution:** Check H2 console to verify users were inserted from data.sql

### Issue: Port 8080 already in use
**Solution:**
```bash
lsof -ti:8080 | xargs kill -9
mvn spring-boot:run
```

---

## ✅ Submission Checklist

- [ ] Application runs successfully
- [ ] All endpoints tested in Postman
- [ ] 4 required screenshots captured
- [ ] Screenshots saved in `screenshots/` folder
- [ ] README.md completed
- [ ] Code committed to Git
- [ ] Pushed to GitHub
- [ ] Submitted to Google Form

---

## 📝 Submission Requirements

### Google Form Submission
Submit your project using the provided Google Form link.

### Include:
1. GitHub repository link
2. Screenshots (minimum 4)
3. README documentation
4. Brief description of implementation

---

## 🎯 Learning Outcomes

After completing this experiment, you will understand:

✅ How to implement authentication in Spring Boot  
✅ How to configure role-based authorization  
✅ How to protect API endpoints using roles  
✅ Difference between 401 Unauthorized and 403 Forbidden  
✅ How to test secured APIs using Postman  
✅ Spring Security configuration and best practices  

---

## 👨‍💻 Author

**Student:** Aru144078  
**Experiment:** 7 - Role-Based Authorization (RBAC)  
**Deadline:** 07 April 2026, Evening  

---

## 📄 License

This project is created for educational purposes as part of university coursework.

---

**🎉 Project Complete and Ready for Testing!**

Start the application and begin testing with Postman to capture your screenshots!
