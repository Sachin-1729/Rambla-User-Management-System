const express = require('express');
const router = express.Router();
const propertyController = require('../Controllers/PropertyController');


// Routes without token verification
router.get('/', propertyController.getAllProperties);
router.post('/store', propertyController.createProperty);




module.exports = router;

