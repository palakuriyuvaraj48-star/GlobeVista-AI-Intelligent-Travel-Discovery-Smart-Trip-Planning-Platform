# 🌍 Travel Platform

Full-stack Travel Platform  
React + Vite (Frontend)  
Node + Express + MongoDB (Backend)

---

# 📁 Project Structure

travel-platform/
│
├── backend/        → Node.js API
└── frontend/       → React (Vite) App

---

# 🚀 How To Run The Project

## 1️⃣ Start Backend

Open terminal:

cd backend  
npm install  
npm start  

Server runs on:
http://localhost:5000

Health Check:
http://localhost:5000/api/health

Expected response:
{ "ok": true }

---

## 2️⃣ Start Frontend

Open new terminal:

cd frontend  
npm install  
npm run dev  

Frontend runs on:
http://localhost:5173  
(or 5174/5175 if 5173 is busy)

---

# 🔐 Required Backend Environment Variables

Create:

backend/.env

Add:

PORT=5000  
MONGODB_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  
CLIENT_ORIGIN=http://localhost:5173  

---

# 🔗 Frontend Environment

Create:

frontend/.env

Add:

VITE_API_BASE_URL=http://localhost:5000  

---

# 🛠 Troubleshooting

## Backend says "MONGODB_URI is required"

→ Check backend/.env exists  
→ Make sure dotenv is loaded in index.js  
→ Restart server after saving  

---

## CORS Error

→ Ensure CLIENT_ORIGIN matches frontend port  
→ Example: http://localhost:5175  

---

## Port Already In Use

Frontend will automatically use next port.  
Update CLIENT_ORIGIN if needed.

---

# 🧠 Important Notes

- Backend and frontend must run in separate terminals.
- Do NOT run npm install in root folder.
- Only run npm install inside backend and frontend.
- Do NOT delete backend/.env.

---

# ✅ Production

Before deployment:

- Change MongoDB password
- Use strong JWT_SECRET
- Set correct CLIENT_ORIGIN
- Never commit .env files to GitHub
