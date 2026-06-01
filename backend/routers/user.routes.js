const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const userSchemaValidation = require("../middlewares/user.validation.middleware")

router.get('/',userController.getAllusers); //for testing purposes
router.post('/register',userSchemaValidation.userSchemaValidationRegister,userController.register);
router.post('/login',userSchemaValidation.userSchemaValidationLogin,userController.login);

module.exports = router;
