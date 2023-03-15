const { create,getAllCourses, getCourseById, updateCourse, deleteCourse } = require('../controllers/courseController')

const courseRouter = require('express').Router()

courseRouter.post('/create',create)
courseRouter.get('/all',getAllCourses)
courseRouter.get('/:id',getCourseById)
courseRouter.put('/:id/update',updateCourse)
courseRouter.delete('/:id/delete',deleteCourse)



module.exports = courseRouter