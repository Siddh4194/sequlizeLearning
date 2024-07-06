// todo: other than database working you can do anything here

const { getUserById, createUserNew } = require("../../service/users/users")


// <<<<<<<<<<<<<<<<< creating the user
async function createUser(req,res){
    const user = req.body;
    const result = await createUserNew(user);
    if(!result) throw new Error("Error while registering new user");
    res.status(200).send(result);
}

// <<<<<<<<<<<<<<<<< getting users
async function getUser(id){
    return await getUserById(id);
}

module.exports = {
    getUser,createUser
}