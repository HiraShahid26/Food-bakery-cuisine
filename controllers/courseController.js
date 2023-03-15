const Course = require("../models/courseModel")


const create = async(req,res)=>{
    try {
        const newCourse = await Course.create(req.body)
        res.send(newCourse)
    } catch (error) {
        console.error(error)
    }
}

// ~~~~~~~~~~~~~~~~~ Get ~~~~~~~~~~~~~~~~~~

const getAllCourses = async(req,res)=>{
    try {
        const allCourses = await Course.find({});
        return res.status(200).send({
            msg: "Here you have all the courses:", allCourses
        })
    } catch (error) {
        console.error(error)  
    }
}

// ~~~~~~~~~~~~~~~~~ Get one Course ~~~~~~~~~~~~~~~~~~

const getCourseById = async(req, res)=> {
    try {
        const  getCourseId = await Course.findById(req.params.id)
        res.send(getCourseId)
    } catch (error) {
        console.error(error)
    }
}

// ~~~~~~~~~~~~~~~~~ Put ~~~~~~~~~~~~~~~~~~

const updateCourse = async(req, res)=> {
    try {
        const {id} = req.params
        const updateCourse = await Course.findByIdAndUpdate(id, req.body)
        res.send(updateCourse)
    } catch (error) {
        console.error(error)
    }
}


// ~~~~~~~~~~~~~~~~~ Delete ~~~~~~~~~~~~~~~~~~

const deleteCourse = async(req, res)=> {
    try {
        const removeCourse = await Course.findByIdAndRemove(req.params.id)
        res.send(removeCourse)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {create, getAllCourses, updateCourse, deleteCourse, getCourseById}