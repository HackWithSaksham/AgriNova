import express from 'express'
import userAuth from '../Middleware/UserAuth.js';
import { registeruser } from '../config/Controller/DataController.js';

const userrouter = express.Router();

userrouter.post("/register",registeruser);

export default userrouter