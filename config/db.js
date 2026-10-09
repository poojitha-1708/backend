const mongoose=require("mongoose");
const connectDB=async() =>{
    try{
        const connection=await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected!");
    }catch(error){
            console.log("DB connection failed!");
            console.log(error);
            process.exit(1);
    } 
}
module.exports=connectDB;