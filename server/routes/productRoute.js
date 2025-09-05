const express = require('express');
const router = express.Router();
const productController = require('./../controllers/productsController');

// Create a new product route
router.post('/add-product', productController.createProduct);

// Get all products
router.get('/get-products', productController.getAllProducts);

// Get product by ID
router.get('/get-product/:productId', productController.getProductById);

// Update product by ID
router.put('/edit-product/:productId', productController.updateProductById);

// Delete product by ID
router.delete('/delete-product/:productId', productController.deleteProductById);

router.put('/update-owner/:productId', productController.updateOwner);

router.post('/add-to-cart', productController.addToCart);

router.delete('/delete-from-cart', productController.deleteFromCart);

router.post('/checkout', productController.purchaseProducts);

router.get('/get-orders', productController.getOrder);

router.put('/increase-product-quantity/:productId/:userId', productController.increaseProductQuantity )

router.put('/decrease-product-quantity/:productId/:userId', productController.decreaseProductQuantity)

module.exports = router;