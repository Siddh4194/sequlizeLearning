const dotenv = require("dotenv");
const output = dotenv.config({
    path:'../.env'
});
const app = require('./app');
const port = process.env.port || 8081;



// ? error is the parameter which is passed by the express server as a callback
app.listen(port,(error)=>{
  if(!error){
    console.log(`Environment --> ${process.env.NODE_ENV}`);
    console.log(`Server is running on the port ${port}`);
  } else{
    console.log(`Error in running the server ${error}`);
  }
})