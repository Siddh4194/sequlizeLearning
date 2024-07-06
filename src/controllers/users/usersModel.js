const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UsersCo {
    id;
    name;
    email;
    #password;

    constructor(params){
        this.id = params.id;
        this.name = params.name;
        this.email = params.email;
        this.#password = params.password;
    }

    get data(){
        return {
            id: this.id,
            name: this.name,
            email: this.email,
        }
    }

    static async newUser(user){
        try{

            const password = "password";
            const {email,name} = user;
            // check for the remaining things
            if(!email || !name){
                console.log("Please provide the email and name");
                return null;
            }

            const hashedPassword = await bcrypt.hash(password,10);

            return {
                email,
                name,
                password: hashedPassword
            }
        } catch(error){
            throw error;
        }
    }

    //? we can create functions which are aligned to the users data
    // todo: when you have a functions which are aligned to the model of the user data
    // todo: like match password and generate the JWT token
    // ! we can directly use them for that data holding class object
    async matchPassword(password){
        const match = await bcrypt.compare(password, this.#password);
        return !!match;
    }

    // ? if there is no argument is passed then the tokenTime have the 1 day expire time by default
    generateJWT(tokenTime = '1d'){
        return {
            accessToken: jwt.sign({data:this.data},process.env.JWT_SECRET_TOKEN,{expiresIn:tokenTime}),
            accessToken: jwt.sign({data:this.data},process.env.JWT_SECRET_TOKEN,{expiresIn:'7d'})
        };
    }
}

module.exports = UsersCo;