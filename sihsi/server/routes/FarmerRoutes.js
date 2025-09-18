import express from 'express'
import { insertdonation, registerfarmer } from '../config/Controller/DataController.js';
import userAuth from '../Middleware/UserAuth.js';

const farmerrouter = express.Router();
farmerrouter.post("/register",registerfarmer);
farmerrouter.post("/donationreq",userAuth,insertdonation);

export default farmerrouter