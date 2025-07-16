# 📝 Task Manager System Backend

This is the backend for a **Simple Task Manager System**, built for the Backend Internship Test Project at **Fetan System Technology**.

It supports user authentication, task creation, filtering, status updates, and deletion using RESTful APIs.

---

## 🚀 Live Deployment

**🔗 Backend URL:**  
[https://task-management-system-t4tr.onrender.com](https://task-management-system-t4tr.onrender.com)

---

## ⚙️ Tech Stack

- **Framework**: Express.js  
- **Database**: MySQL (FreeSQLDatabase.com)  
- **ORM**: Prisma 
- **Authentication**: JWT  
- **Deployment**: Render.com  
- **Validation**: express-validator

---


## 📮 API Endpoints

### 🔐 Authentication

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| POST   | `/auth/signup`   | Register new user with name, email, password, and confirmPassword |
| POST   | `/auth/login`    | Login and receive JWT |

### 👤 User

| Method | Endpoint        | Description                   |
|--------|-----------------|-------------------------------|
| GET    | `/auth/profile` | Returns authenticated user's profile |

### ✅ Tasks

| Method | Endpoint        | Description                                         |
|--------|-----------------|-----------------------------------------------------|
| POST   | `/tasks`        | Create a task (`{ "name": "Task Name" }`)          |
| GET    | `/tasks`        | Get tasks (supports pagination, search, status)    |
| PATCH  | `/tasks/:id`    | Update task status (`pending` or `completed`)      |
| DELETE | `/tasks/:id`    | Delete a task                                       |

#### 🔍 Query Parameters for GET /tasks

- `page`: Page number (default: 1)  
- `limit`: Items per page (default: 10)  
- `search`: Search by task name  
- `status`: Filter by task status (`pending` or `completed`)

Example:  
`GET /tasks?page=1&limit=5&search=design&status=pending`

---

## ⚙️ Environment Variables

Create a `.env` file in the root folder with:

```env
PORT=5000
DATABASE_URL="mysql://<user>:<password>@<host>:<port>/<database_name>"
JWT_SECRET="your_jwt_secret_key"
