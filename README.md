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
  - User creation form
- Axios integration for seamless API communication.
- Components:
  - `UsersList` to display all users.
  - `UsersForm` to create new users.
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
   The frontend will be running.

## API Endpoints

### Users

- **GET /users**: Retrieve all users.
- **DELETE /users/:userId**: Delete an user.

### Posts

- **GET /posts**: Retrieve all posts.
- **GET /posts/:postId**: Retrieve a single post.
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
    │ ├── assets/
    │ ├── components/
    │ │ ├── PostForm.jsx
    │ │ ├── PostsList.jsx
    │ │ ├── UserForm.jsx
    │ │ └── UsersList.jsx
    │ ├── App.jsx
    │ ├── index.css
    │ └── main.jsx
    └── vite.config.js
```
## Chanlenges Faced
### **1. Schema Adjustments**
- Adjusting the Prisma schema to align with MySQL database constraints:
  - Ensuring correct data types (`@db.Text`, `@db.VarChar`) for compatibility with MySQL.
  - Ensuring the correct changes and migration timely.

### **2. API Design**
- Implementing RESTful endpoints for:
  - Retrieving user and post data.
  - Adding and updating posts.
  - Deleting posts with cascading effects (e.g., updating `postCount` for users).

### **3. Handling Relations**
- Managing `User` and `Post` relationships:
  - Ensuring proper foreign key constraints and validations in Prisma.
  - Testing CRUD operations while maintaining data integrity.

### **4. Frontend-Backend Communication**
- Integrating Axios for API requests in the React frontend.
- Debugging issues with CORS configuration to allow communication between frontend and backend.

### **5. State Management**
- Handling state effectively in React components for lists of users and posts.
- Ensuring reactivity when new data (e.g., posts) is added, updated, or deleted.

### **6. Error Handling**
- Implementing proper error handling in both backend and frontend:
  - Returning meaningful error messages for failed database operations.
  - Showing user-friendly alerts on the frontend for errors like invalid inputs or server issues.

### **7. Deployment**
- Deploying the backend server and MySQL database to a live environment:
  - Configuring `.env` for environment-specific variables like `DATABASE_URL`.

### **8. Post-Count Consistency**
- Keeping `postCount` in sync when posts are created or deleted:
  - Incrementing or decrementing the `postCount` field in `User` on post creation/deletion.
  - Handling edge cases where posts are deleted directly from the database.

### **9. Frontend Challenges**
- Designing a simple yet functional UI for the application:
  - Creating components for listing users and posts, and a form for creating posts.
  - Adding validation to the form inputs (e.g., ensuring all required fields are filled).

### **10. Images Field**
- Storing and handling `images` as JSON in Prisma:
  - Deciding on how to upload and manage multiple images for a post.
  - Handling JSON parsing and storage in MySQL.

### **11. Testing**
- Testing all features thoroughly:
  - Backend API endpoints using tools like Postman.
  - Frontend user interactions to ensure smooth functionality.

### **12. Learning Curve**
- Understanding new tools and technologies:
  - Gaining familiarity with Prisma ORM for database management.
  - Learning how to set up routing in React using `react-router-dom`.
  - Debugging issues related to relational database constraints and API integrations.

### **13. Scaling Considerations**
- Thinking ahead for scalability:
  - Designing models to accommodate future features like comments, likes, or followers.
  - Planning for database optimizations and indexing frequently queried fields.

## Future Enhancement Possibilities

- User authentication with JWT.
- Enable image uploads for posts.
- Add pagination for posts and users.
- Improve UI/UX with advanced styling.
