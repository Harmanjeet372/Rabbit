const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Make sure this exports your Sequelize connection

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  discountPrice: {
    type: DataTypes.FLOAT,
  },
  countInStock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
  },
  sizes: {
    type: DataTypes.JSON, // Use JSON for arrays
    allowNull: false,
  },
  colors: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  collections: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  material: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.ENUM("Men", "Women", "Unisex"),
  },
  images: {
    type: DataTypes.JSON, // Array of image objects
    allowNull: false,
  },
  isFeatured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isPublished: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  numReviews: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  tags: {
    type: DataTypes.JSON,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users", // Assumes Users table exists
      key: "id",
    },
  },
  metaTitle: {
    type: DataTypes.STRING,
  },
  metaDescription: {
    type: DataTypes.STRING,
  },
  metaKeywords: {
    type: DataTypes.STRING,
  },
  dimensions: {
    type: DataTypes.JSON, // { length, width, height }
  },
  weight: {
    type: DataTypes.FLOAT,
  },
}, {
  timestamps: true,
  tableName: "products",
});

module.exports = Product;
