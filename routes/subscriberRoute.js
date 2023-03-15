const { create,getAllSubscriber, getSubscriberById, updateSubscriber, deleteSubscriber } = require('../controllers/subscriberController')

const subscriberRouter = require('express').Router()

subscriberRouter.post('/create',create)
subscriberRouter.get('/all',getAllSubscriber)
subscriberRouter.get('/:id' ,getSubscriberById)
subscriberRouter.put('/:id/update',updateSubscriber)
subscriberRouter.delete('/:id/delete',deleteSubscriber)



module.exports = subscriberRouter