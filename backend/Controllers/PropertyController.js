const Property = require('../Models/Propertymodel');
const mongoose = require('mongoose');
const user = require('../Models/Usermodel');

exports.getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find()
                                         .populate("user_id")
                                         .populate("tenant_id")
                                         .populate("landlord_id");
        res.status(200).json({ properties });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.createProperty = async function create(req, res)
{   
    console.log(req.body);
try {
        const { id , user_id , property_name , property_address, property_image , tenant_id , landlord_id}= req.body;
        const property = await Property.create({
            id: id,
            user_id: user_id,
            property_name: property_name,
            property_address:  property_address,
            property_image:  property_image,
            tenant_id : tenant_id,
            landlord_id:  landlord_id
           
        });
        
        
        res.status(201).json({ property });
} catch (error) {

    res.status(400).json({message: error.message});
    
}
    
};