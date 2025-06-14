const authService = require("../services/auth.service");

class AuthController {
  async getAllUser(req, res) {
    try {
      const allPost = await authService.getAllUser();
      res.status(200).json(allPost);
    } catch (error) {
      res.status(500).json(error);
    }
    res.status(200).json({ message: "salom" });
  }
  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const data = await authService.register(email, password);
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  }
  async activation(req, res, next) {
    try {
      const userId = req.params.id;
      await authService.activation(userId);
      return res.json({ message: "user activated" });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AuthController();
