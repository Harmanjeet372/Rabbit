require("dotenv").config(); // Load .env variables FIRST
console.log("JWT_SECRET from .env:", process.env.JWT_SECRET); // Debugging line

const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db"); // Import the new DB connection
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MySQL
connectDB();

console.log("PORT from .env:", process.env.PORT); // Debugging line

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
    res.send("WELCOME TO RABBIT API!");
});

// API routes
app.use("/api/users", userRoutes); 
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
