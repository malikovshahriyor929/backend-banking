const UserDto = require("../dtos/user.dto");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
class AuthService {
  async register(email, password) {
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      throw new Error(`That email ${email} already exist`);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({ email, password: hashedPassword });
    const userDto = new UserDto(user);
    return { userDto };
  }
  async activation(id) {
    const user = await userModel.findById(id);
    if (!user) {
      throw new Error("user is not defined");
    }
    user.isActive = true;
    await user.save();
  }
  async getAllUser() {
    const allPosts = await userModel.find();
    return allPosts;
  }
}

module.exports = new AuthService();
