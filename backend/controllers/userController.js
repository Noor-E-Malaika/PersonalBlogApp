const userModel = require('../models/userModel')
const  bcrypt = require('bcrypt')

//create user register 
exports.registerController = async (req,res) => {
    try{
        const {username,email,password} = req.body
        //validation
        if (!username ||!email || !password ){
            return res.status(400).send({
                success:false,
                message:'please fill all fields'
            })
        }
        //exisiting user
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(401).send({
                success:false,
                message:'user already exist'
            })
        }
        const hashedPassword = await bcrypt.hash(password,10)
        

        //save newuser
        const user = new userModel ({username, email, password:hashedPassword });
        await user.save();
        return res.status(201).send({
            success: true,
            message:'New user Created',
            user
        })
    }catch(error) {
        console.log(error)
        return res.status(500).send({
            message: 'error in register callback',
            success:false,
            error
        })
    }
};

//gett all user
exports.getAllUsers = async (req,res) => {
    try{
        const users = await userModel.find({})
        return res.status(200).send({
           userCount: users.length,
            success: true,
            message: 'all user data',
            users,
        })
    }catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'error in get all user',
            error
        })
    }
};

//login
exports.loginController = async (req,res) => {
    try{
         const {email, password} = req.body
         //validation
         if(!email || !password ){
            return res.status(401).send({
                success:false,
                message:'Please provide email or password'
            })
         }
         const user = await userModel.findOne({email})
         if (!user){
            return res.status(200).send({
                success:false,
                message:'email is not registered'
            })
         }
         //password
         const isMatch = await bcrypt.compare(password, user.password)
         if(!isMatch){
            return res.status(401).send({
                succes:false,
                message: 'Invalid username or password'
            })
         }
         return res.status(200).send({
            success:true,
            message: 'login succesfully',
            user
         })
    }catch (error) {
        console.log (error)
        return res.status (500).send({
            success: false,
            message: 'Error in login Callback',
            error
        })
    }
};