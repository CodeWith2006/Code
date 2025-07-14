const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./userController');

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});