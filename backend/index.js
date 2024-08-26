const express = require("express")
//const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const morgan = require("morgan")
const connectDB = require("./config/db")



//env config
dotenv.config()

//router import
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')


//mongodb connection
connectDB();

//rest object
const app = express()

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

//routes
/*app.get('/' , (req, res) => {
    res.send("Noor E Malaika  ")
})*/
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog', blogRoutes );
/*app.get("/backend", (req, res) =>{
    res.status(200).send({
        hello,
    });
});*/

//Port
const PORT = process.env.PORT  || 8800;
//listen
app.listen(PORT, () => {
    console.log(`Noor E Malaika ${process.env.DEV_MODE} mode port no ${PORT}`);
})