const express = require('express');
const connectDB = require('./config/db');
const issueRoutes = require('./routes/issues');
const projectRoutes = require('./routes/projects');
const userRoutes = require('./routes/users');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api/issues', issueRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);
app.use('/uploads', express.static('uploads'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
