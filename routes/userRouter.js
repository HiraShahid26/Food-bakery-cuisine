const { create,getAllUsers, updateUser, getUserById, deleteUser, loginUser, logoutUser } = require('../controllers/userController')
const verifyToken = require("../middleware/auth")
const userRouter = require('express').Router()

userRouter.post('/create',create)
userRouter.get('/all',getAllUsers)
userRouter.put('/:id/update',updateUser)
userRouter.get('/:id', getUserById)
userRouter.delete('/:id/delete',deleteUser)
userRouter.post('/login',verifyToken , loginUser)
userRouter.get('/logout',logoutUser)



module.exports = userRouter