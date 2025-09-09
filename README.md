# Government Project Transparency Portal

A **web-based transparency system** for citizens to view and track government projects such as **flood control, road construction, housing developments, and more**.  
This portal aims to **increase accountability, promote open governance, and ensure transparency** in infrastructure projects.  

Built with the **MERN stack (MongoDB, Express.js, React, Node.js)**, the system provides:
- A **citizen-facing portal** to explore projects with budgets, status, and timelines.
- An **admin dashboard** for government staff to manage projects, upload documents, and update progress.

---

## ✨ Features

### Citizen Portal
- Browse all government projects.
- Filter projects by **category, location, status, or budget**.
- View project details: description, contractor, budget, progress, and timeline.
- Download/view attached reports and documents.
- Mobile-friendly design for easy access.

### Admin Dashboard
- Secure login for authorized staff.
- Role-based access (Admin, Project Manager, Auditor).
- CRUD operations on projects.
- Upload contracts, reports, and permits.
- Data visualization (progress charts, budget usage).

---

## 🛠 Tech Stack

- **Frontend**: React (Vite + TypeScript), Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Auth**: JWT (JSON Web Tokens)
- **Deployment**: Vercel (frontend), Render/Railway/AWS (backend)

---

## 📂 Project Structure

```bash
gov-portal/
├── frontend/                # React + Vite app
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page-level components
│   │   ├── layouts/         # Public/Admin layouts
│   │   ├── services/        # API calls
│   │   ├── types/           # TypeScript types/interfaces
│   │   └── App.tsx
│   └── ...
│
├── backend/                 # Node + Express app
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── routes/          # API routes
│   │   ├── models/          # MongoDB models
│   │   ├── middlewares/     # Auth, logging, etc.
│   │   └── server.js
│   └── ...
│
└── README.md
