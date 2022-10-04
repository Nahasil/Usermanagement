
const asyncHandler=require("express-async-handler");
const generateToken=require("../utils/generateToken");
const User =require('../models/userModels')


module.exports={
	//-----------------Admin Login------------------\\
	
	adminLogin : asyncHandler(async (req,res) => {
		const {email,password}=req.body;
		const adminEmail = process.env.ADMIN_EMAIL
        const adminPassword = process.env.ADMIN_PASSWORD
		
		if(adminEmail==email&&adminPassword==password)
		{
			
			res.json({
				name:'Admin',
				email: adminEmail,
				isAdmin: true,
				token:generateToken('123456')
			})
		}
		else
		{
			res.status(400) 
			throw new Error('Invalid Email and Password')
		}
	}),
	
	//------------------Get all Users------------------\\
	
	getAllUsers: asyncHandler(async (req,res) => {
		const users=await User.find()
		if(!users) {
			res.status(400)
			throw new Error('Not Found Users')
		}
		else {
			res.status(200)
			res.json({users})
		}
	
	}),
	
	//---------------------Delete a User-----------------\\
	deleteUser: asyncHandler(async(req,res) => {
		const id=req.params.id
		const result = await User.deleteOne({_id:id})
		if(!result) {
			res.status(400)
			throw new Error('User is not found')
		}
		else {
			res.status(200)
			res.json({result})
		}
	}),
	
	//-----------------Get User-------------\\
	
	getUser: asyncHandler(async (req,res) => {
		const id=req.params.id
		const user=await User.findOne({_id: id})
		if(!user) {
			res.status(400)
			throw new Error('User is not found')
		}
		else {
			res.status(200)
			res.json({user})
		}
	}),
	
	//----------------Edit User--------------\\
	editUser: asyncHandler(async (req,res) => {
		const id=req.params.id
		const result= await User.updateOne({_id: id},{$set: req.body})
		res.status(200)
		res.json({result})
		console.log('hloo:',result)
	})
	
	
}