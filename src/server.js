const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// todo implement this to the index file at the model
// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('Database & tables synced');
  })
  .catch(err => {
    console.error('Unable to sync database:', err);
  });

// Middleware to parse JSON bodies
app.use(express.json());

// Route to create a new user
app.post('/users', async (req, res) => {
  try {
    const { username, email } = req.body;
    const newUser = await User.create({ username, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
