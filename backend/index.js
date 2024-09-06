//const require = require('express')
import express from "express";  
import dotenv from "dotenv";  
import connectDB from "./config/database.js";

dotenv.config({});

const app = express();

const PORT = process.env.PORT || 5080;

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at port ${PORT}`);
})