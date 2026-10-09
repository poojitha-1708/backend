const express=require("express");

const dotenv=require("dotenv");

const connectDB=require("./config/db");

const app=express();

const errorHandler=require("./middleware/errorHandler");

const courseRoutes=require("./routes/courses");

const port=process.env.port ||5000;

dotenv.config();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"API is working!"
    })
});

app.use((req,res,next)=>{
console.log(req.method)
console.log(req.url);
next();
});

app.use("/courses",courseRoutes);

app.use((req,res)=>{
    res.status(404).json({
        message:"Page not found!"
    })
});

app.use(errorHandler);

app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
});