const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register", authController.register);
router.get("/activation/:id", authController.activation);
router.get("/getAllUser", authController.getAllUser);

module.exports = router;
