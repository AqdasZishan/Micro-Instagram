# Micro Instagram

Micro Instagram is a minimalistic and simplified social media application built with a React frontend and an Express backend. It provides basic functionality for user and post management, with a clean and modular architecture.

## Features

### Backend

- Built with **Express.js** and **Prisma** ORM.
- **MySQL Database** integration for storing users and posts.
- RESTful API endpoints for CRUD operations:
  - Fetch all users and posts.
  - Create, update, and delete posts.
  - Automatically update user post counts.
- JSON support for storing image data.

### Frontend

- Built with **React.js** for a dynamic and responsive user interface.
- **React Router** for navigation between views:
  - User list.
  - Post list.
  - Post creation form.
- Axios integration for seamless API communication.
- Components:
  - `UsersList` to display all users.
  - `PostsList` to display all posts.
  - `PostForm` to create new posts.

## Technologies Used

### Backend:

- **Express.js**: A fast and minimalist web framework for Node.js.
- **Prisma**: Next-generation ORM for database management.
- **MySQL**: Relational database for storing application data.
- **CORS**: Enable cross-origin requests.
- **Body-Parser**: Parse incoming JSON requests.

### Frontend:

- **React.js**: For creating a user-friendly frontend.
- **React Router**: For client-side routing.
- **Axios**: To make HTTP requests.
- **CSS**: For styling components.

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your system:

- Node.js
- npm or Yarn
- MySQL database

### Backend Setup

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the database:
   - Create a `.env` file and add your database URL:
     ```env
     DATABASE_URL="mysql://user:password@localhost:3306/micro_instagram"
     ```
   - Run Prisma migrations:
     ```bash
     npx prisma migrate dev
     ```
5. Start the server:
   ```bash
   node src/index.js
   ```
   The server will be running on `http://localhost:3000`.

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The frontend will be running on `http://localhost:3001`.

## API Endpoints

### Users

- **GET /users**: Retrieve all users.

### Posts

- **GET /posts**: Retrieve all posts.
- **POST /user/:userId/posts**: Create a new post for a user.
- **PUT /posts/:postId**: Edit an existing post.
- **DELETE /posts/:postId**: Delete a post.

## File Structure

```
micro-instagram/
├── backend/
│ ├── .env
│ ├── package.json
│ ├── prisma/
│ │ ├── migrations/
│ │ │ ├── 20241224135603_init/
│ │ │ │ └── migration.sql
│ │ │ └── migration_lock.toml
│ │ └── schema.prisma
│ └── src/
│ └── index.js
└── frontend/
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── public/
    ├── README.md
    ├── src/
    │ ├── App.css
    │ ├── App.jsx
    │ ├── assets/
    │ ├── components/
    │ │ ├── PostForm.jsx
    │ │ ├── PostsList.jsx
    │ │ ├── UserForm.jsx
    │ │ └── UsersList.jsx
    │ ├── index.css
    │ └── main.jsx
    └── vite.config.js
```

## Future Enhancement Possibilities

- User authentication with JWT.
- Enable image uploads for posts.
- Add pagination for posts and users.
- Improve UI/UX with advanced styling.
