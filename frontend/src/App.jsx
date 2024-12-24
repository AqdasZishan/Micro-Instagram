import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UsersList from "./components/UsersList";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import UserForm from "./components/UserForm";
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Micro Instagram</h1>
          <nav className="app-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/users" className="nav-link">Users</Link>
              </li>
              <li className="nav-item">
                <Link to="/posts" className="nav-link">Posts</Link>
              </li>
              <li className="nav-item">
                <Link to="/posts/new" className="nav-link">Create Post</Link>
              </li>
              <li className="nav-item">
                <Link to="/users/new" className="nav-link">Create User</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/users" element={<UsersList />} />
            <Route path="/posts" element={<PostsList />} />
            <Route path="/posts/new" element={<PostForm />} />
            <Route path="/posts/:postId/edit" element={<PostForm />} />
            <Route path="/users/new" element={<UserForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;