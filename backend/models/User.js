const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs"); // Import bcrypt for hashing and comparing passwords
const sequelize = require("../config/db"); // Make sure this points to your sequelize instance

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "customer",
  },
}, {
  timestamps: false, // Disable automatic createdAt and updatedAt fields
});

// Add a method to compare the password (this is the matchPassword method)
User.prototype.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Hash the password before saving a new user or updating it
User.beforeCreate(async (user) => {
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10);
  }
});

User.beforeUpdate(async (user) => {
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10);
  }
});

module.exports = User;
