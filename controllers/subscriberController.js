const Subscriber = require("../models/subscriber")


//~~~~~~~~~~~~~~~~ Post ~~~~~~~~~~~~~~~~~~~~~~~~~~

const create = async(req,res)=>{

    try {
        const { name, email, zipCode} = req.body;
        if (!(name && email && zipCode)) {
          return res.status(400).send({
            success: false,
            message: "All input are required",
          });
        }
        const subscriber = await Subscriber.create(req.body)
        res.send({
            msg:"sub is created.",
            subscriber
        })
    }catch (error) {
        console.error(error)
    }
}

//~~~~~~~~~~~~~~~~ Get ~~~~~~~~~~~~~~~~~~~~~~~~~~

const getAllSubscriber = async(req,res)=>{
    try {
        const allSubscriber = await Subscriber.find({});
        return res.status(200).send({
            msg: "Here you have all the subscribers:", allSubscriber
        })
    } catch (error) {
        console.error(error) 
    }
}

// ~~~~~~~~~~~~~~~~~ Get one Sub ~~~~~~~~~~~~~~~~~~

const getSubscriberById = async(req, res)=> {
    try {
        const  getSubscriberId = await User.findById(req.params.id)
        res.send(getSubscriberId)
    } catch (error) {
        console.error(error)
    }
}

//~~~~~~~~~~~~~~~~ Put ~~~~~~~~~~~~~~~~~~~~~~~~~~

const updateSubscriber = async(req, res)=> {
    try {
        const {id} = req.param
        const updateSubscriber = await Subscriber.findByIdAndUpdate(id, req.body)
        res.send(updateSubscriber)
    } catch (error) {
        console.error(error)
    }
} 



//~~~~~~~~~~~~~~~~ Delete ~~~~~~~~~~~~~~~~~~~~~~~~~~

const deleteSubscriber = async(req, res)=> {
    try {
        const removeSubscriber = await Subscriber.findByIdAndRemove(req.params.id)
        res.send(removeSubscriber)
    } catch (error) {
        console.error(error)
    }
}


module.exports = {create, getAllSubscriber, getSubscriberById, updateSubscriber,deleteSubscriber}