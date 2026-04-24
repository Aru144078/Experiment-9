# 📸 Screenshots Folder

Place your Postman testing screenshots here.

## Required Screenshots (Minimum 4)

1. **01-user-access-success.png** ⭐
   - USER (user1) successfully accessing `/api/user/profile`
   - Status: 200 OK

2. **02-user-forbidden.png** ⭐
   - USER (user1) denied access to `/api/admin/dashboard`
   - Status: 403 Forbidden

3. **03-admin-access-success.png** ⭐
   - ADMIN (admin1) successfully accessing `/api/admin/dashboard`
   - Status: 200 OK

4. **04-unauthorized.png** ⭐
   - No authentication provided
   - Status: 401 Unauthorized

## Recommended Additional Screenshots

5. **05-public-endpoint.png**
   - Public endpoint access without authentication
   - Status: 200 OK

6. **06-invalid-credentials.png**
   - Login attempt with wrong password
   - Status: 401 Unauthorized

7. **07-h2-console.png**
   - H2 database console showing users table

8. **08-project-structure.png**
   - IDE showing project folder structure

## Screenshot Guidelines

- Capture full Postman window
- Show URL, method, authorization, and response
- Make sure status codes are visible
- Ensure response body is readable
- Use PNG format for better quality
- Name files clearly and sequentially

## File Naming Convention

Use this format:
- `01-description.png`
- `02-description.png`
- etc.

This keeps screenshots organized and easy to reference.
