const User = require("./models/User");
const Role = require("./models/Role");
const items = require("./js/item_schema");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { secret } = require("./config");
//const alert = require("alert");

const generateAccsessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};
class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Validation error" });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res.status(400).json({ message: "User already exists" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "User" });
      const user = new User({
        username,
        password: hashPassword,
        roles: [userRole.value],
      });
      await user.save();
      return res.json({ message: "User has been registred" });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: "Registration error" });
    }
  }
  async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: `User ${username} not found` });
      }
      const validPass = bcrypt.compareSync(password, user.password);
      if (!validPass) {
        return res.status(400).json({ message: `Wrong password` });
      }
      const token = generateAccsessToken(user._id, user.roles);
      req.headers.authorization = token;
     
      return res.json({ token });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: "Login error" });
    }
  }
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {}
  }
  async getItems(req, res) {
    try {
      const goods = await items.find();
      res.json(goods);
    } catch (e) {}
  }
}

module.exports = new authController();
