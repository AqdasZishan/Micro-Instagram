import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../index.css';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handleDelete = (postId) => {
    axios.delete(`http://localhost:3000/posts/${postId}`).then(() => {
      setPosts(posts.filter((post) => post.id !== postId));
    });
  };

  const handleEdit = (postId) => {
    navigate(`/posts/${postId}/edit`);
  };

  return (
    <div className="container">
      <h2 className="page-header">Posts</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">Post ID</th>
            <th className="table-header">User ID</th>
            <th className="table-header">Title</th>
            <th className="table-header">Description</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="table-row">
              <td className="table-cell">{post.id}</td>
              <td className="table-cell">{post.userId}</td>
              <td className="table-cell">{post.title}</td>
              <td className="table-cell">{post.description}</td>
              <td className="table-cell">
                <button onClick={() => handleEdit(post.id)} className="button-edit">Edit</button>
                <button onClick={() => handleDelete(post.id)} className="button-delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostsList;