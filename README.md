<div align="center">

# 💰 Personal Finance Tracker

### A full-stack MERN application to track, manage, and predict your personal expenses

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Python](https://img.shields.io/badge/Python-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Axios](https://img.shields.io/badge/Axios-HTTP-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)

![Finance Tracker Banner](https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=300&fit=crop&q=80)

</div>

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [API Reference](#-api-reference)
- [Database Schema](#-database-schema)
- [Screenshots](#-screenshots)
- [How It Works](#-how-it-works)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About the Project

**Personal Finance Tracker** is a full-stack web application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) plus a **Python/FastAPI** micro-service for budget prediction. It allows users to log daily expenses by category and amount, view their full expense history, delete entries, and get a smart prediction of their next month's budget — all through a clean, intuitive interface.

This project was built as a learning exercise to understand how a React frontend, a Node.js/Express REST API, a MongoDB database, and a Python FastAPI service all work together in a real-world application.

> **Perfect for:** Students learning full-stack development, developers exploring MERN architecture, or anyone who wants a simple personal budgeting tool.

---

## ✨ Features

| Feature | Description |
|---|---|
| ➕ **Add Expense** | Log expenses with a category name and amount in ₹ (Indian Rupees) |
| 📋 **Expense History** | View all past expenses in real-time, sorted by most recent |
| 🗑️ **Delete Entry** | Remove any expense entry instantly |
| 🔮 **Budget Prediction** | Python/FastAPI micro-service predicts next month's budget (total + 10%) |
| 🔄 **Live Sync** | Frontend auto-fetches data from MongoDB on load via Axios |
| 🌐 **REST API** | Clean Express API with `GET`, `POST`, and `DELETE` endpoints |
| 📦 **Persistent Storage** | All data stored permanently in MongoDB |

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React.js 19** | UI framework with functional components & hooks |
| **Axios** | HTTP client for API communication |
| **CSS3** | Custom styling with transitions and hover effects |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime environment |
| **Express.js 5** | REST API server and routing |
| **Mongoose 9** | MongoDB ODM for schema and queries |
| **CORS** | Cross-Origin Resource Sharing middleware |

### Database
| Technology | Purpose |
|---|---|
| **MongoDB** | NoSQL database for storing expenses |

### Prediction Service
| Technology | Purpose |
|---|---|
| **Python 3** | Language for data processing |
| **FastAPI** | High-performance async API framework |
| **Pandas** | Data analysis and budget computation |
| **Uvicorn** | ASGI server for FastAPI |

---

## 🏗 Project Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        USER BROWSER                          │
│                  React App  (Port: 3000)                     │
└──────────────────────────┬──────────────────────────────────┘
                           │  HTTP Requests (Axios)
                           ▼
┌─────────────────────────────────────────────────────────────┐
│              Node.js / Express Server (Port: 5000)           │
│                                                              │
│   POST /api/expenses   →  Save new expense                  │
│   GET  /api/expenses   →  Fetch all expenses                │
│   DELETE /api/expenses/:id  →  Remove an expense            │
└──────────────────────────┬──────────────────────────────────┘
                           │  Mongoose ODM
                           ▼
┌─────────────────────────────────────────────────────────────┐
│               MongoDB  (localhost:27017/financeDB)           │
│                     Collection: products                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│          Python FastAPI Service (Port: 8000)                 │
│                                                              │
│   GET /api/expenses   →  List sample transactions           │
│   GET /api/predict    →  Budget prediction (total + 10%)    │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Folder Structure

```
MERN-Finance-Tracker/
│
├── 📄 server.js             # Express server, API routes, MongoDB connection
├── 📄 product.js            # Mongoose schema/model for expenses
├── 📄 package.json          # Backend dependencies
├── 📄 main.py               # FastAPI budget prediction micro-service
│
└── 📁 frontend/             # React application
    ├── 📄 package.json
    ├── 📁 public/
    │   └── 📄 index.html    # Root HTML template
    └── 📁 src/
        ├── 📄 App.js        # Main React component (state, API calls, UI)
        ├── 📄 App.css       # Styling with transitions and hover effects
        └── 📄 index.js      # React DOM entry point
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v16 or higher) — [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** (running locally) — [Download](https://www.mongodb.com/try/download/community)
- **Python 3.8+** — [Download](https://www.python.org/downloads/)
- **pip** (comes with Python)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/your-username/MERN-Finance-Tracker.git
cd MERN-Finance-Tracker
```

**2. Install backend dependencies**
```bash
npm install
```

**3. Install frontend dependencies**
```bash
cd frontend
npm install
cd ..
```

**4. Install Python dependencies**
```bash
pip install fastapi uvicorn pandas pydantic
```

### Running the App

You will need **3 terminals** running simultaneously.

**Terminal 1 — Start MongoDB**
```bash
# On macOS / Linux
mongod

# On Windows (if installed as a service, it may already be running)
# Otherwise, navigate to your MongoDB bin folder:
mongod --dbpath "C:\data\db"
```

**Terminal 2 — Start the Node.js/Express Backend**
```bash
# In the project root
node server.js
```
> ✅ You should see: `MongoDB se connection pakka ho gaya!` and `Server port 5000 par daud raha hai...`

**Terminal 3 — Start the React Frontend**
```bash
cd frontend
npm start
```
> ✅ Your browser will automatically open at `http://localhost:3000`

**Terminal 4 (Optional) — Start the Python Prediction Service**
```bash
python main.py
# OR
uvicorn main:app --reload --port 8000
```
> ✅ FastAPI service runs at `http://localhost:8000`

---

## 📡 API Reference

### Node.js / Express API (Port: 5000)

#### Get All Expenses
```http
GET /api/expenses
```
**Response:**
```json
[
  {
    "_id": "64a1f2e...",
    "item_name": "Food",
    "price": 500,
    "category": "Food",
    "date": "2024-01-15T10:30:00.000Z"
  }
]
```

#### Add New Expense
```http
POST /api/expenses
Content-Type: application/json
```
**Request Body:**
```json
{
  "category": "Food",
  "amount": 500
}
```
**Response:** `201 Created` with the saved document.

#### Delete an Expense
```http
DELETE /api/expenses/:id
```
**Response:**
```json
{ "message": "Item delete ho gaya! 🗑️" }
```

---

### Python / FastAPI Service (Port: 8000)

#### Get Sample Transactions
```http
GET /api/expenses
```

#### Get Budget Prediction
```http
GET /api/predict
```
**Response:**
```json
{
  "predicted_budget": 7370.0
}
```
> The prediction is calculated as: **total spending × 1.10** (i.e., 10% more than current total).

---

## 🗄 Database Schema

The expense document is stored in MongoDB under the `financeDB` database, `products` collection.

```javascript
{
  item_name:  String,        // Expense name (same as category)
  price:      Number,        // Amount in ₹ (Rupees)
  category:   String,        // Category (e.g., Food, Rent, Shopping)
  date:       Date           // Auto-set to current timestamp (default: Date.now)
}
```

---

## 📸 Screenshots

### Application UI — Add Expense Form

![Add Expense Form](https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&h=400&fit=crop&q=80)

> The form allows you to enter a **Category** (e.g., Food, Rent, Shopping) and an **Amount** in ₹. On clicking "Add Expense", the data is saved to MongoDB via a POST request.

---

### Expense History List

![Expense History](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=400&fit=crop&q=80)

> All previously added expenses are displayed as a scrollable list. Each entry shows the **category name**, **amount**, and a **Delete** button to remove it instantly.

---

### MongoDB Data Storage

![MongoDB Database](https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&h=400&fit=crop&q=80)

> Behind the scenes, every expense is persisted in a MongoDB collection. Data survives page refreshes and server restarts.

---

### Budget Prediction (FastAPI)

![Budget Prediction](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=400&fit=crop&q=80)

> The Python/FastAPI micro-service analyzes total spending using **Pandas** and returns a predicted budget for the next month — calculated as the current total plus a 10% buffer.

---

## ⚙️ How It Works

### 1. Adding an Expense
1. User fills in **Category** and **Amount** in the React form.
2. Clicking "Add Expense" triggers `handleAddExpense()` in `App.js`.
3. Axios sends a `POST /api/expenses` request to the Express server.
4. Express creates a new Mongoose document and saves it to MongoDB.
5. On success (`201`), React updates the local state to show the new entry immediately.

### 2. Loading Expense History
1. On component mount, `useEffect` calls `fetchExpenses()`.
2. Axios sends a `GET /api/expenses` request.
3. Express queries MongoDB with `.find().sort({ date: -1 })` (newest first).
4. The returned array is stored in React state and rendered as a list.

### 3. Deleting an Expense
1. Clicking the red **Delete** button calls `handleDelete(id)`.
2. Axios sends `DELETE /api/expenses/:id` to Express.
3. Express calls `findByIdAndDelete()` on MongoDB.
4. React filters out the deleted item from its local state — no page reload needed.

### 4. Budget Prediction (Python Service)
1. FastAPI reads the transactions list (or a database in a full implementation).
2. Pandas calculates the **sum of all amounts**.
3. Returns `total + 10%` as the predicted next-month budget.

---

## 🔮 Future Improvements

- [ ] 🔐 **User Authentication** — Login/Signup with JWT tokens
- [ ] 📊 **Charts & Graphs** — Visual spending breakdown using Chart.js or Recharts
- [ ] 🏷️ **Budget Limits** — Set monthly limits per category with alerts
- [ ] 📅 **Date Filtering** — Filter expenses by week, month, or custom date range
- [ ] 💱 **Multi-Currency** — Support for USD, EUR, and other currencies
- [ ] 📱 **Responsive Design** — Mobile-first layout improvements
- [ ] 🐳 **Docker** — Containerize the full stack with Docker Compose
- [ ] ☁️ **Cloud Deployment** — Deploy to Render / Vercel / Railway
- [ ] 🤖 **Smarter Prediction** — Replace the 10% rule with a real ML regression model

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please make sure your code is clean and well-commented.

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ using the **MERN Stack** + **Python FastAPI**

⭐ If you found this project helpful, please give it a star!

</div>
