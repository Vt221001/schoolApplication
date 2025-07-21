# 📚 School Application

The **School Application** is a full-featured, scalable platform designed to manage school operations digitally. This repository includes both backend and frontend codebases to facilitate efficient administration of schools, including student data, attendance, fee tracking, and more.

---

## 🗂 Project Structure

The repository is organized into the following folders:

- **Backend**: Core backend built with Node.js, Express, and MongoDB for handling school data and APIs.
- **Backend Master**: Manages master data like session, classes, sections, and subjects.
- **Frontend Masters Login**: React-based login system for different user roles (Admin, Teacher, Student, etc.).
- **School App Frontend**: Complete frontend dashboard built with React for different stakeholders like staff, students, and admin.

---

## ✅ Features

- 👨‍🎓 Student & Staff Management
- 🕘 Attendance & Leave Tracking
- 📝 Exam & Result Module
- 💵 Fee Collection System
- 🚌 Transport & Bus Route Tracking
- 📚 Subject & Class Master Configuration
- 🔐 Secure Login System with Role-based Access

---

## ⚙️ Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React.js, Tailwind CSS (optional)
- **Authentication**: JWT (JSON Web Token)
- **State Management**: React Context API (or Redux - optional)

---

## 🧾 Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v16+ recommended)
- **MongoDB** (local or Atlas)
- **npm** or **yarn**

---

## 🚀 Installation & Running Locally

Follow these steps to get started with the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Vt001/schoolApplication.git
cd schoolApplication
```

---

### 2. Setup Backend

```bash
cd Backend
npm install
# Create .env file with necessary configs
npm start
```

> Sample `.env` file for Backend:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net
DB_NAME=schoolDB
ACCESS_TOKEN_SECRET=youraccesstokensecret
REFRESH_TOKEN_SECRET=yourrefreshtokensecret
```

---

### 3. Setup Backend Master

```bash
cd ../BackendMaster
npm install
# Create .env file
npm start
```

---

### 4. Setup Frontend Masters Login

```bash
cd ../FrontendMastersLogin
npm install
npm run dev
```

---

### 5. Setup School App Frontend

```bash
cd ../SchoolAppFrontend
npm install
npm run dev
```

> The frontend should now be running at `http://localhost:5173/` or similar depending on your Vite config.

---

## 🛠 Sample Code Snippets

### MongoDB Connection

```js
// Backend/src/Db/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
    console.log(`MongoDB Connected...`);
  } catch (err) {
    console.error("MongoDB connection error", err);
    process.exit(1);
  }
};

export default connectDB;
```

---

### Staff Dashboard UI

```jsx
// School App Frontend/src/pages/Dashboard/StaffDashboard.jsx
import React from 'react';

const StaffDashboard = () => {
  return (
    <div>
      <h1>I am Staff dashboard</h1>
    </div>
  );
};

export default StaffDashboard;
```

---

## 🤝 Contribution

Contributions are always welcome!

- Fork the repository
- Create your feature branch (`git checkout -b feature/new-feature`)
- Commit your changes (`git commit -m 'Add new feature'`)
- Push to the branch (`git push origin feature/new-feature`)
- Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ✉️ Contact

For any queries or support, reach out via GitHub Issues or email at **vt.devteam@example.com**
