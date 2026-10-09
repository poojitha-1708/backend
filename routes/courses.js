const express=require("express");

const router=express.Router();

const control=require("../controllers/courseController");

router.get("",control.getCourses);

router.get("/filter", control.filterCourses);

router.get("/sort", control.sortCourses);

router.get("/:id",control.getCourse);

router.post("/",control.createCourse);

router.put("/:id" ,control.updateCourse);

router.delete("/:id",control.deleteCourse);  



module.exports=router;
