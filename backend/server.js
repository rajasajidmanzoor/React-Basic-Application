import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDb from './config/db.js';
connectDb();
import userRoutes from './routes/userRoutes.js';

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/api/users', userRoutes);
app.get('/', (req, res)=> res.send('Server is Ready'));

app.use(notFound);
app.use(errorHandler);
app.listen(port, ()=> console.log(`Server started on Port ${port}`));