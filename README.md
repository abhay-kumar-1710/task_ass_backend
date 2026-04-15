# 🎓 Training Institute Backend API

A fully functional **Backend API** built using **Node.js, Express.js, and MongoDB** for managing a Training Institute platform.

This backend supports authentication, course management, trainers, inquiries, and admin functionalities with a clean and scalable architecture.

---

## 🚀 Tech Stack

* **Backend Framework:** Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Authentication:** JSON Web Token
* **File Upload:** Multer (for thumbnails)

---

## 📁 Project Structure

```
server.js
src/
 ├── app.js
 ├── db/
 │    └── db.js
 ├── models/
 │    ├── user.model.js
 │    ├── course.model.js
 │    ├── trainer.model.js
 │    └── inquiry.model.js
 ├── controllers/
 │    ├── auth.controller.js
 │    ├── course.controller.js
 │    ├── trainer.controller.js
 │    └── inquiry.controller.js
 ├── routes/
 │    ├── auth.routes.js
 │    ├── course.routes.js
 │    ├── trainer.routes.js
 │    └── inquiry.routes.js
 ├── middlewares/
 │    ├── auth.middleware.js
 │    └── role.middleware.js
```

---

## 🔐 Authentication

### Features

* User Registration
* Login (JWT stored in cookies)
* Logout (clears cookie)
* Role-based access (User/Admin)

### APIs

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Login user        |
| POST   | `/api/auth/logout`   | Logout user       |

---

## 👤 User Roles

```js
role: {
  type: String,
  enum: ["user", "admin"],
  default: "user"
}
```

---

## 📚 Courses Module

### Features

* Add course (Admin)
* Update course (Admin)
* Delete course (Admin)
* View all courses (Public)
* Upload thumbnail
* Add video URL

### APIs

| Method | Endpoint           | Description     |
| ------ | ------------------ | --------------- |
| GET    | `/api/courses`     | Get all courses |
| POST   | `/api/courses`     | Create course   |
| PUT    | `/api/courses/:id` | Update course   |
| DELETE | `/api/courses/:id` | Delete course   |

---

## 🧠 Course Schema

```js
{
  title,
  duration,
  fees,
  description,
  thumbnail,
  videoUrl
}
```

---

## 👨‍🏫 Trainers Module

### Features

* View trainer profiles

### APIs

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| GET    | `/api/trainers` | Get all trainers |

---

## 📩 Inquiry Module

### Features

* Logged-in users can submit inquiries
* Admin can view all inquiries

### APIs

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/api/inquiries` | Submit inquiry    |
| GET    | `/api/inquiries` | Get all inquiries |

---

## 🛡️ Admin Features

* Manage courses (CRUD)
* View inquiries
* View total users

### API

| Method | Endpoint                | Description     |
| ------ | ----------------------- | --------------- |
| GET    | `/api/auth/users/count` | Get total users |

---

## 🔐 Security

* JWT Authentication (cookie-based)
* HTTP-only cookies
* Role-based route protection
* Middleware for authentication & authorization

---

## 🔄 Data Flow

```
Client → Routes → Controllers → Models → MongoDB
```

---

## ⚙️ Environment Variables

Create a `.env` file in root:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run Locally

```bash
# Install dependencies
npm install

# Start server
npm run dev
```

---

## 🌟 Key Highlights

* Clean MVC architecture
* Secure cookie-based authentication
* Role-based authorization
* RESTful API design
* Scalable folder structure
* File upload support

---

## 📌 Conclusion

This backend system provides a complete solution for managing a training institute platform with authentication, course management, trainer data, and inquiry handling.

---

## 👨‍💻 Author

**Abhay Kumar**
Full Stack Developer 🚀
