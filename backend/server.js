import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import mainRoutes from './routes/main.js';
import userRoutes from './routes/user.js';
import officerRoutes from './routes/officer.js';
import adminRoutes from './routes/admin.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes API Linking
app.use('/api', mainRoutes);
app.use('/api/user', userRoutes);
app.use('/api/officer', officerRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
