# 🏥 Prescripto Panel - User Frontend

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)](https://nodejs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.4.0-purple?logo=vite)](https://vitejs.dev/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-green)](https://healthcare-bmhe.onrender.com/)

**Prescripto Panel** is a modern **Doctor Appointment Management System** for users/patients. Users can view doctors, book appointments, and track their medical schedules.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Installation & Usage](#installation--usage)
- [Environment Variables](#environment-variables)
- [Live Demo](#live-demo)

---

## Project Overview

This frontend is built with **React.js + Tailwind CSS** and connects to a backend for real-time doctor appointment management.

- Browse doctors by specialization
- Book and cancel appointments
- Track upcoming appointments
- Smooth communication with doctors via the system

---

## Features

### User Panel

- Browse list of doctors and their profiles
- Book appointments for available slots
- Cancel or reschedule appointments
- Track all upcoming appointments

---

## Technologies Used

- **Frontend:** React.js, Tailwind CSS, React Router, Axios, React Toastify
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT Tokens for Users
- **Deployment:** Vite, Render

---

## Folder Structure

```text
/project-root
├─ /public
├─ /src
│  ├─ /assets
│  ├─ /components
│  ├─ /context
│  ├─ /pages
│  │  ├─ /Home
│  │  │  ├─ Home.jsx
│  │  │  └─ DoctorsList.jsx
│  │  ├─ /Appointments
│  │  │  ├─ MyAppointments.jsx
│  │  │  └─ BookAppointment.jsx
│  │  └─ Login.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ .env
├─ package.json
└─ README.md


Installation & Usage
# Clone the repository
git clone https://github.com/abdullah-dev1113/user-frontend.git

# Navigate to the project directory
cd user-frontend

# Install dependencies
npm install

# Start the development server
npm run dev

# Open in browser at:
http://localhost:5173


Environment Variables
Create a .env file in the root directory and add:

# For production (live backend)
VITE_BACKEND_URL=https://doctor-backend-service.onrender.com
# For local development (backend runs on port 5000)
# VITE_BACKEND_URL=http://localhost:5000

Live Demo

🌐 Access the live app: https://healthcare-bmhe.onrender.com/
```
