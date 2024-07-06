// ! IMPORTANT:
// todo: in the service always work on the database nothing more than that

const UsersCo = require("../../controllers/users/usersModel");
const { Users } = require("../../../models");

// >>>>>>>>>>>>>>>> create users
async function createUserNew(user){
    try{
        const {email,password,name} = user;
        const newUser = await UsersCo.newUser({email,password,name});
        const result = await Users.create(newUser);
        return new UsersCo(result);
    } catch(err){
        throw err;
    }
    
}

// >>>>>>>>>>>>>>>>> getUsers funcitons
async function getUserById(id){
    const user = await Users.findByPk(id);
    return new UsersCo(user);
}

module.exports = {getUserById,createUserNew};