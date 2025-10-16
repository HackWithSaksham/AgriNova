import express from "express"
import cors from "cors"
import "dotenv/config"
import cookieParser from "cookie-parser"
import connectDB from "./server/config/mongodb.js";
import farmerrouter from "./server/routes/FarmerRoutes.js";
import userrouter from "./server/routes/UserRoutes.js";

import knowledgeRoutes from "./server/routes/knowledgeRoutes.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials:true}))

app.use('/api/farmer',farmerrouter);
app.use('/api/user',userrouter);
app.use("/api/knowledge", knowledgeRoutes);

app.listen(port,()=>console.log("Server Started"));
