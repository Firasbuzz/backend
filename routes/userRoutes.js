const express = require("express");

const userRouter = express.Router();
const {addUserIMGController} = require('../controllers/userController')



userRouter.route('/user/img').post(addUserIMGController)


module.exports = userRouter;


