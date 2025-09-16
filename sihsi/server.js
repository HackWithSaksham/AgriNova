import express from "express"
import cors from "cors"
import "dotenv/config"
import cookieParser from "cookie-parser"
import connectDB from "./server/config/mongodb.js";

import knowledgeRoutes from "./server/routes/knowledgeRoutes.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials:true}))

app.use("/api/knowledge", knowledgeRoutes);

app.listen(port,()=>console.log("Server Started"));
