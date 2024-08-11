const express = require("express");
const router = express.Router();
const { registerUserController } = require("../controller/userController");

router.post("/register", registerUserController);

module.exports = router;
