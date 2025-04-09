# SchoolTrack - Educational Management System

## Overview

**SchoolTrack** is a comprehensive educational management system built with **Node.js** and **MongoDB**. It facilitates seamless communication between school administrators, teachers, and parents while managing academic records and administrative tasks.

---

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Features & Functionality](#features--functionality)
3. [Installation Guide](#installation-guide)
4. [Project Structure](#project-structure)
5. [API Documentation](#api-documentation)
6. [Contributing](#contributing)

---

## System Architecture

SchoolTrack leverages a modern tech stack:

- **Backend**: Node.js with Express.js  
- **Database**: MongoDB with Mongoose ODM  
- **Real-time Communication**: Socket.IO  
- **Authentication**: JWT + bcrypt  
- **File Processing**: Multer + xlsx  
- **Email Service**: Nodemailer  

---

## Features & Functionality

### 📩 Communication System
- Real-time messaging between teachers and parents
- Instant notifications for:
  - New messages
  - Form submissions
  - Attendance updates
  - Academic performance updates

### 👥 User Management
- Multi-role authentication (Admin / Teacher / Parent)
- Role-based access control
- Secure password management
- OTP-based password recovery

### 🎓 Academic Management
- Student records management
- Attendance tracking
- Academic performance monitoring
- Bulk data import/export
- Dynamic form creation and management

---

## Installation Guide

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/try/download/community)
- npm or yarn

### 🚀 Complete Setup Guide

#### 1. Required Software Installation

Install Node.js and MongoDB from the official websites.

#### 2. Project Setup

```bash
# Clone Repository
git clone https://github.com/Sanjay-Aski/Field-Project-SE.git
cd Field-Project-SE

# Install Backend Dependencies
npm install

# Install Frontend Dependencies
cd client
npm install
cd ..
```

#### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=5000
MONGO_URI=mongodb://localhost:27017/schooltrack

# Security
JWT_SECRET=your_secret_key
ADMIN_KEY=your_admin_key_here

# Email Settings
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

---

### 🧲 Running the Application

#### 1. Start MongoDB
```bash
# Windows
# Ensure MongoDB service is running (check Windows Services or run mongod manually)
```

#### 2. Start Backend Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

#### 3. Start Frontend
```bash
cd client
npm run dev
```

---

### 🌐 Access Points
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:5000](http://localhost:5000)

---

### ❗ Troubleshooting Guide

#### 🔌 MongoDB Connection Failed
- Ensure MongoDB is running
- Verify the `MONGO_URI` in `.env`

#### 🚩 Port Conflicts
- If port 5000 is in use, change it in `.env`

#### 📧 Email Issues
- For Gmail, use **App Password** if 2FA is enabled
- Double-check credentials in `.env`

---

### 🚠 Development Notes
- Backend uses `nodemon` for auto-reloading
- Frontend is powered by **Vite**
- Real-time features via **Socket.IO**
- Ensure MongoDB is running before starting the server

---

## 📁 Project File Structure

```
├── admin
├── client
│   ├── public
│   └── src
│       ├── assets
│       ├── components
│       │   ├── chat
│       │   ├── layouts
│       │   └── ui
│       ├── contexts
│       ├── pages
│       │   ├── admin
│       │   │   ├── complaints
│       │   │   ├── components
│       │   │   ├── consent
│       │   │   ├── donations
│       │   │   ├── parents
│       │   │   ├── students
│       │   │   └── teachers
│       │   ├── auth
│       │   ├── parent
│       │   │   ├── attendance
│       │   │   ├── chat
│       │   │   ├── children
│       │   │   ├── donations
│       │   │   ├── forms
│       │   │   ├── marksheet
│       │   │   └── marksheets
│       │   ├── support
│       │   └── teacher
│       │       ├── attendance
│       │       ├── chat
│       │       ├── forms
│       │       ├── marksheet
│       │       └── students
│       ├── services
│       └── utils
│           └── images
├── middleware
├── parents
├── support
└── teacher
```

---

## 🌱 Environment Variables

Create a `.env` file in the project root:

```env
# Server Configuration
PORT=5000
MONGO_URI=mongodb://localhost:27017/schooltrack

# Security
JWT_SECRET=a3f1b68c2d7e8c4f9e5a6d7b8c9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e
ADMIN_KEY=your_admin_key_here

# Email Settings
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

> ⚠️ **Important**:
> - Replace placeholders with actual values
> - Keep `JWT_SECRET` and `ADMIN_KEY` secure and private

---

##  Developed By

- Sanjay Aski  
- Bikas Paul  
- Moneet Bhiwandkar  
- Nikhil Janyani  

---