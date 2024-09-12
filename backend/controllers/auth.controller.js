// import {User} from "../models/userModel.js"
// import bcrypt from "bcryptjs"

import { User } from "../models/user.model.js";

// export const register = async(req,res)=>{
//     try{
//         const {fullname, username, password, confirmPassword, gender} = req.body;
//         if(!fullname || !username || !password || !confirmPassword || !gender){
//             return res.status(400).json({message:"All fields are required"});
//         }
//         if(password !== confirmPassword){
//             return res.status(400).json({message:"Password do not match"});
//         }

//         const user = await User.findOne({username});
//         if(user){
//             return res.status(400).json({message:"Username already exists try a different username"});
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);

//         //profilePhoto
//         const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
//         const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        
//         await User.create({
//             fullname,
//             username,
//             password:hashedPassword,
//             profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
//             gender
//         });
//         return res.status(201).json({
//             message:"Account created successfully",
//             success:true
//         })
//     }catch(error){
//         console.log(error);
//     }
// }

export const signup = async(req, res) => {
    try {
        const {fullname,username,password,confirmPassword,gender} = req.body;

        if(password !== confirmPassword)
        {
            return res.status(400).json({message:"Password do not match"});
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({message:"Username already exists try a different username"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        
        //profilePhoto
        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        
        const newUser = new User({
            fullname,
            username,
            password,
            profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
            gender
        })

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilePhoto: newUser.profilePhoto,
        });
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error"});
    }    
};

export const login = (req, res) => {
    console.log("loginUser");
};

export const logout = (req, res) => {
    console.log("logoutUser");
};
