import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import '../index.css';

function PostForm() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (postId) {
      axios.get(`http://localhost:3000/posts/${postId}`).then((response) => {
        const post = response.data;
        setTitle(post.title);
        setDescription(post.description);
        setUserId(post.userId);
        setImages(post.images);
      });
    }
  }, [postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, description, images };
    if (postId) {
      axios.put(`http://localhost:3000/posts/${postId}`, post).then(() => {
        alert("Post updated successfully!");
        navigate("/posts");
      });
    } else {
      axios.post(`http://localhost:3000/user/${userId}/posts`, post).then(() => {
        alert("Post created successfully!");
        navigate("/posts");
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-header">{postId ? "Edit Post" : "Create Post"}</h2>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        disabled={!!postId}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-textarea"
      ></textarea>
      <button type="submit" className="form-button">
        {postId ? "Update" : "Create"}
      </button>
    </form>
  );
}

export default PostForm;