const { Router } = require("express");
const {getUser, createUser } = require("../../controllers/users/users");


const userRouter = new Router();

// >< Route for createUserByID
userRouter.route('/createUser')
.post(createUser);


// >< Route for getUserById
userRouter.route('/userById')
.get(getUser)

module.exports = userRouter;