const mongoose = require("mongoose");
const Role = require('../Models/Role');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role_id:{
        type: mongoose.Types.ObjectId,
        ref: Role, 
        required: [true,'Please Select the role']
        
    },
    
    
},
{timestamps: true}
);



 
const User = mongoose.model("User", userSchema,"users");

module.exports = User
