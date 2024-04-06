import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
require('dotenv').config();



connectDB();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 1000 ;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));


