const mongoose=require("mongoose");
const courseSchema=new mongoose.Schema({
    course:{type:String,required:true,trim:true},
    hours:{type:Number},
    platform:{type:String,enum: ["youtube", "udemy", "coursera", "other"],default: "other",min:1,max:500},
    completed:{type:Boolean,default:false},
    startedOn:{type:Date,default:Date.now}
    },{
        timestamps:true
});
module.exports=mongoose.model("Course",courseSchema);