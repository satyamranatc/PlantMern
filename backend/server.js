import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";

import PlantRoutes from "./routes/PlantRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin:[
    "https://plantmernfrontend.onrender.com/",
    "http://localhost:5173"
  ]
}));
app.use(express.json());

connectDB();


app.get("/", (req, res) => {
  res.json({ message: "API is live" });
});

app.use("/api/plants",PlantRoutes)


app.listen(PORT, () => {
  console.log('Server running ...')
});
