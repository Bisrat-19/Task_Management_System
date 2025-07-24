const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');

const errorMiddleware = require('./middlewares/error.middleware');

const app = express();
require('./config/db');

app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Task Manager API!');
});

app.use('/auth', authRoutes);
app.use('/auth', userRoutes);
app.use('/tasks', taskRoutes);

app.use(errorMiddleware);

module.exports = app;