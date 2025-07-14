const express = require('express');
const router = express.Router();

// In-memory user storage
let users = [
  { id: 1, username: 'divyansh124', password: '666dm' }
];

// Create user
router.post('/', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username and password required.' });
  const id = users.length ? users[users.length-1].id + 1 : 1;
  const user = { id, username, password };
  users.push(user);
  res.status(201).json(user);
});

// Read all users
router.get('/', (req, res) => {
  res.json(users);
});

// Read single user by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found.' });
  res.json(user);
});

// Update user
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found.' });
  const { username, password } = req.body;
  if (username) user.username = username;
  if (password) user.password = password;
  res.json(user);
});

// Delete user
router.delete('/:id', (req, res) => {
  const idx = users.findIndex(u => u.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'User not found.' });
  users.splice(idx, 1);
  res.json({ message: 'User deleted.' });
});

module.exports = router;