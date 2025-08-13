const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');

// Signup route
router.post('/signup', userController.signup);

// Login route
router.post('/login', userController.login);

// Delete user by ID route
router.delete('/users/:userId', userController.deleteUser);

// Edit user by ID route
router.put('/user/:userId', userController.editUser);

// Get all users route
router.get('/users', userController.getAllUsers);

// Get user by ID route
router.get('/user/:userId', userController.getUserById);

// Add to cart route
// router.post('/users/:userId/cart', userController.addToCart);

module.exports = router;
