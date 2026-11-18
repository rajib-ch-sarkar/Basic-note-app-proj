# 📝 Todo Notes App

A full-stack Notes Application built using the MERN stack.

## 🚀 Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

## ✨ Features

- Create new notes
- Delete existing notes
- Fetch notes from MongoDB
- Persistent data storage
- Responsive UI
- REST API integration

## 📁 Project Structure

- FRONTEND – React application
- BACKEND – Express server and MongoDB integration

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Install frontend dependencies

```bash
cd FRONTEND
npm install
```

### 3. Install backend dependencies

```bash
cd ../BACKEND
npm install
```

### 4. Configure environment variables

Create a `.env` file inside BACKEND:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 5. Start the backend

```bash
npm run dev
```

### 6. Start the frontend

Open another terminal:

```bash
cd FRONTEND
npm run dev
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/tasks | Fetch all notes |
| POST | /api/tasks | Create a note |
| DELETE | /api/tasks/:id | Delete a note |

## 👨‍💻 Author

Developed as a full-stack MERN learning project.