const express = require('express');
const app = express();
const port = 8080; // Set your desired port
const fs = require('fs'); // Require the File System module

app.use(express.json()); // Middleware to parse JSON data

// Sample data for testing
let usersData = require('./users.json');

// Get list of users
app.get('/api/users', (req, res) => {
  res.json(usersData);
});

// Get a single user by ID
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = usersData.users.find((user) => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Insert a user
app.post('/api/users', (req, res) => {
  const newUser = req.body; // Assumes that the request body contains user data
  newUser.id = usersData.users.length + 1;
  usersData.users.push(newUser);

  // Update the users.json file with the new data
  fs.writeFileSync('./users.json', JSON.stringify(usersData, null, 2), 'utf-8');

  res.status(201).json(newUser);
});

// Delete a user by ID
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = usersData.users.findIndex((user) => user.id === id);
  if (userIndex >= 0) {
    const deletedUser = usersData.users.splice(userIndex, 1);

    // Update the users.json file after deleting
    fs.writeFileSync('./users.json', JSON.stringify(usersData, null, 2), 'utf-8');

    res.json(deletedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
