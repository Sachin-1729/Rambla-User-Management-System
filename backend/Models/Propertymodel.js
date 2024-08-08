const mongoose = require("mongoose");



const propertySchema = new mongoose.Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
     //  required: true
    },
    property_name :{
       type: String,
       required: true,

    },
    property_address :{
        type: String,
        required: true,
    },
    property_image :{
        type: String,
       required: true,
    },
    tenant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // type: mongoose.Types.ObjectId,
       
    },
    landlord_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
       // required: true
       
    }
    
}, { timestamps: true });

const Property = mongoose.model("Property",propertySchema,"properties");
module.exports = Property