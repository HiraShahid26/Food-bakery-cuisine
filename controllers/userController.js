const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


//~~~~~~~~~~~~~~~~ Post ~~~~~~~~~~~~~~~~~~~~~~~~~~

const create = async(req,res)=>{

    try {
        const { name, lastName, email, password } = req.body;
        // Valider le user input
        if (!(name && lastName && email && password)) {
          return res.status(400).send({
            success: false,
            message: "All input are required",
          });
        }
    
        // Valider si le user existe déja
        const oldUser = await User.findOne({ email });
        if (oldUser) {
          return res.status(200).send({
            success: false,
            message: "User already exists, please login",
          });
        }
        // Hashé le mdp
        const hashedPassword = await bcrypt.hash(password, 10);
        // Creer le user donc le SAVE
        const user = await User.create({
          name,
          lastName,
          email: email.toLowerCase(),
          password: hashedPassword,
        });
    
        // Mettre le JWT
        const token = jwt.sign({ user_id: user.id, email }, process.env.TOKEN_KEY, {
          expiresIn: "2h",
        });
        user.token = token;

        res.send({
            msg:"/bravo!",
            token

        })
      } catch (error) {
        res.status(500).send({
          success: false,
          message: error.message,
        });
      }
}

//~~~~~~~~~~~~~~~~ Get ~~~~~~~~~~~~~~~~~~~~~~~~~~

const getAllUsers = async(req,res)=>{
    try {
        const allUsers = await User.find({});
        return res.status(200).send({
            msg: "Here you have all the users:", allUsers
        })
    } catch (error) {
        console.error(error) 
    }
}

// ~~~~~~~~~~~~~~~~~ Get one user ~~~~~~~~~~~~~~~~~~

const getUserById = async(req, res)=> {
    try {
        const  getUserId = await User.findById(req.params.id)
        res.send(getUserId)
    } catch (error) {
        console.error(error)
    }
}

//~~~~~~~~~~~~~~~~ Put ~~~~~~~~~~~~~~~~~~~~~~~~~~

const updateUser = async(req, res)=> {
    try {
        const {id} = req.params
        const updateUser = await User.findByIdAndUpdate(id, req.body)
        res.send(updateUser)
    } catch (error) {
        console.error(error)
    }
}

//~~~~~~~~~~~~~~~~ Delete ~~~~~~~~~~~~~~~~~~~~~~~~~~

const deleteUser = async(req, res)=> {
    try {
        const removeUser = await User.findByIdAndRemove(req.params.id)
        res.send(removeUser)
    } catch (error) {
        console.error(error)
    }
}


//~~~~~~~~~~~~~~~~ Login ~~~~~~~~~~~~~~~~~~~~~~~~~~

const loginUser = async (req, res)=>{ 
    try {
        // On recupere l'email et le password du req
        const { email, password} = req.body
        if(!(email && password)){
            return res.status(400).send({
                success: false, 
                message: "All input are required"
            });
        }
        // on trouve le user en fct de email
        const user = await User.findOne({email})
        //si ya pas user:
        if(user && (await bcrypt.compare(password, user.password))){
            const token = jwt.sign({user_id: user.id, email}, process.env.TOKEN_KEY, {expiresIn: "2h"})
            user.token = token;
            return res.status(200).send({
                success: true,
                message: "Le user a  été Trouvé",
                user
            })
        }
        // on compare le password avec celui hashé
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    } 
    
}

const logoutUser = async (req, res) => {

    try {
        
    } catch (error) {
        console.error(error)
    }

}


module.exports = {create, getAllUsers, getUserById, updateUser, deleteUser, loginUser , logoutUser}