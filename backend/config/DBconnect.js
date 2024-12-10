const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("crudUser", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(console.log("Connection has been established successfully."))
  .catch((error) => console.error("Unable to connect to the database:", error));

// Đồng bộ cơ sở dữ liệu
sequelize
  .sync({ force: false }) // Chỉ tạo bảng nếu chưa tồn tại
  .then((e) => {
    console.log("Database synchronized successfully.");
  })
  .catch((err) => {
    console.error("Error synchronizing database:", err);
  });

module.exports = sequelize;
