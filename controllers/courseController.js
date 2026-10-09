const Course=require("../models/course");

exports.getCourses=async(req,res,next)=>{
    try{
        const courses=await Course.find();
        res.status(200).json(courses);
    }catch(error){
        next(error);
    }
}

exports.getCourse=async(req,res,next)=>{
    try{
    const id=req.params.id;
    const course=await Course.findById(id);
    if(!course){
        return res.status(404).json({
            message:"Course Not Found"
        });
    }
    res.status(200).json(course);
    }catch(error){
        next(error);
    }
}

exports.filterCourses = async (req, res, next) => {
    try {
        const platform = req.query.platform;

        const courses = await Course.find({
            platform: platform
        });

        res.status(200).json(courses);
    } catch (error) {
        next(error);
    }
};



exports.sortCourses = async (req, res, next) => {
    try {
        const order = req.query.order;

        const sortOrder = order === "desc" ? -1 : 1;

        const courses = await Course.find().sort({
            hours: sortOrder
        });

        res.status(200).json(courses);
    } catch (error) {
        next(error);
    }
};


exports.createCourse=async(req,res,next)=>{
    try{
        const {course,hours}=req.body;
        if(!course){
            return res.status(400).json({
                message:"Course name is required"
            });
        }
        if(!hours){
            return res.status(400).json({
                message:"Hours are required"
            });
        }
        const newCourse=await Course.create(req.body);
        res.status(201).json(newCourse);
    }catch(error){
        next(error);
    }
}

exports.updateCourse=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const course=await Course.findByIdAndUpdate(id,req.body,{
            returnDocument:"after",runValidators:true});
        if(!course){
            return res.status(404).json({
                message:"Course Not Found"
            });
        }
        res.status(200).json(course);
    }catch(error){
        next(error);
    }
}

exports.deleteCourse=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const course=await Course.findByIdAndDelete(id);
        if(!course){
            return res.status(404).json({
                message:"Course Not Found"
            });
        }
        res.status(200).json({
            message:"Course Deleted Successfully"
        });
    }catch(error){
        next(error);
    }
}
