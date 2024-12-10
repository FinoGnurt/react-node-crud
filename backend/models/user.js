const { DataTypes } = require("sequelize");
const sequelize = require("../config/DBconnect");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users", // Tên bảng trong cơ sở dữ liệu
    timestamps: true, // Tự động thêm createdAt và updatedAt
  }
);

// `sequelize.define` also returns the model
console.log("Models: ", User === sequelize.models.User); // true

module.exports = User;
