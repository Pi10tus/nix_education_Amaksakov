const Router = require("express");
const router = new Router();
const controller = require("./authController");
const { check } = require("express-validator");
router.post(
  "/registration",
  [
    check("username", "Validation error").notEmpty(),
    check("password", "Validation error").isLength({ max: 10, min: 4 }),
  ],
  controller.registration
);
router.post("/login", controller.login);
router.get("/users", controller.getUsers);
router.get("/items", controller.getItems)
module.exports = router;
