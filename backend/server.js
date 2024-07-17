import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cookieParser());

// Connect to MongoDB database--------------------------------
import connectToMongo from "./db/connectToMongo.js";
// ----------------------------------------------------------------

// Load environment variables--------------------------------
dotenv.config();
// ---------------------------------------------------------------

// middleware to parse incoming request bodies into req.body--------------------------------
app.use(express.json());
// ----------------------------------------------------------------

// Define routes--------------------------------
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// ----------------------------------------------------------------
app.listen(PORT, () => {
  connectToMongo();
  console.log(`listening on port ${process.env.PORT}`);
});
