const express = require("express");
const sequelize = require("./config/DBconnect");
const userRouter = require("./routes/user");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

sequelize;

app.use("/", userRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
