# Online-complaint-registration

An online complaint registration project developed using **MERN STACK TECHNOLOGY** during my virtual internship program by **SMARTBRIDGE** in collaboration with APSCHE.

---

## 📌 Project Overview
This is a full-stack web application designed to streamline the process of lodging and managing citizen complaints. The portal provides role-based dashboards for Citizens, Officers, and Admins to ensure transparency and quick resolution of public grievances across various government departments.
## 🛠️ Development Tools & Technologies

### 💻 Core Tech Stack
* **Frontend:** React.js, HTML5, CSS3, JavaScript (ES6+)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (using Mongoose ODM)

### 🧰 Software & IDEs Used
* **IDE:** JetBrains **WebStorm** (Advanced JavaScript & React Workspace)
* **Version Control:** **Git** & **GitHub** for repository management
* **Runtime Environment:** **Node.js** (v18+ or latest v20+)
* **Database GUI:** **MongoDB Compass** / Local MongoDB Community Server

## 🚀 Features

### 🔹 Citizen Features
* **Secure Auth:** Sign Up and Login with full credentials.
* **Lodge Complaints:** Submit detailed grievances directly to 15 different Government Departments.
* **Track Status:** View up to 10 latest registered complaints along with real-time status badges (`Review`, `Assign`, `Resolve`).

### 🔹 Officer Features
* **Dashboard Management:** View up to 20 active complaints relevant to operations.
* **Detailed View:** Click-to-view modal mechanism to read the complete grievance text and citizen details.

### 🔹 Admin Features
* **Global Oversight:** Full administrative view of all 20 complaints with distinct interface styling and enhanced access privileges.

---

## 📂 Tech Stack Used

* **Frontend:** React.js, HTML5, CSS3, JavaScript (ES6+)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (using Mongoose ODM)

---

## 📁 System Architecture & Folder Structure

```text
complaint-portal/
├── backend/
│   ├── config/db.js          # MongoDB Connection Config
│   ├── models/               # User & Complaint Schemas
│   ├── routes/               # Modular Express API Routes
│   └── server.js             # Main Backend Entry Point
└── frontend/
    ├── public/index.html     # Base HTML File
    └── src/                  # React Source Code
        ├── pages/            # View Dashboards (User, Admin, Officer, Login)
        ├── App.jsx           # Core Routing and State Management
        ├── index.css         # Global Responsive Styling
        └── main.jsx          # DOM Bootstrapper





 
