# 📝 Task Manager System Backend

This is the backend for a **Simple Task Manager System**, built for the Backend Internship Test Project at **Fetan System Technology**.

It supports user authentication, task creation, filtering, status updates, and deletion using RESTful APIs.

---

## 🚀 Tech Stack

- **Node.js**
- **ExpressJS**
- **MySQL**
- **Prisma ORM**
- **JWT (JSON Web Tokens)**
- **dotenv**
- **CORS**

---

## 📦 Features

### ✅ Authentication

- **POST /auth/signup** – User registration (name, email, password, confirmPassword)
- **POST /auth/login** – Login with email and password
- Passwords hashed using `bcryptjs`
- JWT authentication implemented

### 👤 User API

- **GET /auth/profile** – Get authenticated user’s profile (name & email)

### 📋 Task APIs

- **POST /tasks** – Create a new task (default status: `pending`)
- **GET /tasks** – Retrieve tasks with:
  - Pagination (`page`, `limit`)
  - Search (`search`)
  - Status filter (`status=pending|completed`)
- **PATCH /tasks/:id** – Update task status to `pending` or `completed`
- **DELETE /tasks/:id** – Delete a task

---

## ⚙️ Environment Variables

Create a `.env` file in the root folder with:

```env
PORT=5000
DATABASE_URL="mysql://<user>:<password>@<host>:<port>/<database_name>"
JWT_SECRET="your_jwt_secret_key"
