const app = require("./app");
const http = require('http');
const courseRouter = require("./routes/courseRoute");
const userRouter = require("./routes/userRouter");
const subscriberRouter = require("./routes/subscriberRoute");


const {API_PORT} = process.env;
const port = process.env.PORT || API_PORT;


app.use('/courses',courseRouter)
app.use('/users',userRouter)
app.use('/subscribers',subscriberRouter)

app.listen(port, ()=>console.log(`Listening on port ${port}`));
