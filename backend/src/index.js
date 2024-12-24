// File: src/index.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(cors());

// Middleware to handle BigInt serialization
app.use((req, res, next) => {
  const originalJson = res.json;
  res.json = function (data) {
    const serializedData = JSON.parse(
      JSON.stringify(data, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
      )
    );
    originalJson.call(this, serializedData);
  };
  next();
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new user
app.post('/users', async (req, res) => {
  const { name, mobileNumber, address } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        mobileNumber: BigInt(mobileNumber), // Ensure mobileNumber is stored as BigInt
        address,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a user
app.delete('/users/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await prisma.user.delete({
      where: { id: parseInt(userId) },
    });
    res.json({ message: 'User deleted successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new post for a user
app.post('/user/:userId/posts', async (req, res) => {
  const { userId } = req.params;
  const { title, description, images } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        title,
        description,
        images,
        userId: parseInt(userId),
      },
    });

    await prisma.user.update({
      where: { id: parseInt(userId) },
      data: { postCount: { increment: 1 } },
    });

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Edit a post
app.put('/posts/:postId', async (req, res) => {
  const { postId } = req.params;
  const { title, description, images } = req.body;
  try {
    const post = await prisma.post.update({
      where: { id: parseInt(postId) },
      data: { title, description, images },
    });

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single post by ID
app.get('/posts/:postId', async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(postId) },
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a post
app.delete('/posts/:postId', async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await prisma.post.delete({
      where: { id: parseInt(postId) },
    });

    await prisma.user.update({
      where: { id: post.userId },
      data: { postCount: { decrement: 1 } },
    });

    res.json({ message: 'Post deleted successfully', post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});