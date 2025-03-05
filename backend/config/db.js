require("dotenv").config(); // Load .env variables
const mongoose = require("mongoose");

console.log("MONGO_URI from .env:", process.env.MONGO_URI); 

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection failed.", err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
