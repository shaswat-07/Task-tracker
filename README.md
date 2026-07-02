# Task Tracker

A full-stack MERN Task Tracker application that allows users to create, update, complete, and delete tasks through a clean and responsive interface.

## Features

- Create new tasks
- Edit existing tasks
- Mark tasks as completed/incomplete
- Delete tasks
- Form validation
- Responsive UI
- Dynamic updates without page refresh
- RESTful API
- MongoDB database integration

## Tech Stack

### Frontend
- React.js
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

## Project Structure

```
TaskTracker/
│
├── frontend/
│
├── backend/
│
└── README.md
```

## Installation

### Clone the repository

```bash
git clone <repository-url>
cd TaskTracker
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

Run the backend

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
```

Run the frontend

```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/tasks/get` | Get all tasks |
| POST | `/api/tasks/add` | Add task |
| PUT | `/api/tasks/update/:id` | Update task |
| PUT | `/api/tasks/isCompleted/:id` | Toggle completion |
| DELETE | `/api/tasks/delete/:id` | Delete task |


## Live Demo


## Future Improvements

- Authentication
- Search tasks
- Task filtering
- Task sorting
- Due dates
- Categories
- Dark mode
- Drag and drop

## Author

**Shaswat Pathak**

GitHub: https://github.com/shaswat-07
