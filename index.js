require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./database/mongodb");

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

const startServer = async () => {
  app.get("/", (req, res) => {
    res.send("api is running");
  });

  app.use("/user", userRoutes);

  app.listen(process.env.PORT, () => {
    console.log(`app listening to port ${process.env.PORT}`);
  });
};

connectDB()
  .then(() => startServer())
  .catch((err) => console.log(`error starting server ${err}`));
