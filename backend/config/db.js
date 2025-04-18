require("dotenv").config(); // Load environment variables
const { Sequelize } = require("sequelize");

console.log("MYSQL_DB from .env:", process.env.MYSQL_DB);

const sequelize = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST || "localhost",
    dialect: "mysql",
    logging: false, // set to true to see raw SQL logs
  }
);

// Test connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connected successfully");
  } catch (error) {
    console.error("MySQL connection failed:", error);
    process.exit(1);
  }
};

module.exports = sequelize;
module.exports.connectDB = connectDB;
