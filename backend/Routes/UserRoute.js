const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');
const verifyToken = require('../Middleware/Verify_token');

// Routes without token verification
router.get('/101', userController.getStaticRoute101);
router.get('/102', userController.getStaticRoute102);
router.post("/login", userController.login);

// Routes with token verification
router.post("/", verifyToken, userController.createUser);
router.get("/", verifyToken, userController.getAllUsers);
router.get("/:id", verifyToken, userController.getUserById);
router.delete("/:id", verifyToken, userController.deleteUserById);
router.patch("/:id", verifyToken, userController.updateUserById);
router.get("/auth/me", verifyToken, userController.me);

module.exports = router;

