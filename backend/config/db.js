const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb data base ${mongoose.connection.host}`)
      } catch (error){
            console.log(`mongo connect ERR ${error}`)
        }
    };

    module.exports= connectDB;
