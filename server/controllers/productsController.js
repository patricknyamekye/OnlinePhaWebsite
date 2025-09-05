const Product = require('./../models/productModel');
const upload = require('./../middlewears/upload')
const User = require('./../models/userModel')
const Order = require('../models/orderModel');

const productController = {
  
    createProduct: async (req, res) => {
      upload(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ error: err });
        }
  
        try {
          const productImg = req.file ? req.file.filename : '';
          const { name, description, price, productCategory, quantity } = req.body;
  
          if (!name || !description || !price || !productCategory || !quantity) {
            return res.status(400).json({ error: 'All fields are required' });
          }
  
          const product = new Product({
            name,
            description,
            price,
            productImg,
            productCategory,
            quantity
          });
  
          await product.save();
          res.status(200).json({ message: 'Product created successfully', product });
        } catch (error) {
          res.status(500).json({ error: 'Server error' });
        }
      });
    },
  
    increaseProductQuantity: async (req, res) => {
      try {
        const { userId, productId } = req.params;
    
        // Find the user's cart
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Find the product in the user's cart
        const productInCart = user.cart.find(item => item.productId.toString() === productId);
        if (!productInCart) {
          return res.status(404).json({ message: 'Product not found in cart' });
        }
    
        // Increase the quantity of the product in the cart
        productInCart.quantity += 1;
        await user.save();
    
        res.status(200).json({ message: 'Product quantity in cart increased successfully', cart: user.cart });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
    },
    
    decreaseProductQuantity: async (req, res) => {
      try {
        const { userId, productId } = req.params;
    
        // Find the user's cart
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Find the product in the user's cart
        const productInCart = user.cart.find(item => item.productId.toString() === productId);
        if (!productInCart) {
          return res.status(404).json({ message: 'Product not found in cart' });
        }
    
        // Decrease the quantity of the product in the cart
        if (productInCart.quantity > 1) {
          productInCart.quantity -= 1;
        } else {
          // If the quantity is 1 and user decreases it, remove the item from the cart
          user.cart = user.cart.filter(item => item.productId.toString() !== productId);
        }
        await user.save();
    
        res.status(200).json({ message: 'Product quantity in cart decreased successfully', cart: user.cart });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
    },    

  // Get all products
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json({ products: products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Get product by ID
  getProductById: async (req, res) => {
    try {
      const { productId } = req.params;
      const _id = productId;
      const product = await Product.findById({ _id });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Update product by ID
  updateProductById: async (req, res) => {
    try {
      const { productId } = req.params;
      const _id = productId;

      const product = await Product.findById({ _id });

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      const updatedProduct = await Product.findByIdAndUpdate(_id, req.body, { new: true });

      updatedProduct.save();

      res.status(200).json({ message: 'Product updated successfully', updatedProduct });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Delete product by ID
  deleteProductById: async (req, res) => {
    try {
      const { productId } = req.params;
      const _id = productId;
      const product = await Product.findByIdAndDelete({ _id });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Update owner information
  updateOwner: async (req, res) => {
    try {
      const { productId } = req.params;
      const { name, telephone, location } = req.body;

      if (!name || !telephone || !location) {
        return res.status(400).json({ error: 'All owner fields are required' });
      }

      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      product.owner = { name, telephone, location };
      await product.save();

      res.status(200).json({ message: 'Owner updated successfully', product });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  addToCart: async (req, res) => {
    try {
      const { userId, productId } = req.body;

      // Find user and product
      const user = await User.findById(userId);
      const product = await Product.findById(productId);

      if (!user || !product) {
        return res.status(404).json({ error: 'User or Product not found' });
      }

      // Check if product is already in the cart
      const cartItem = user.cart.find(item => item.productId.toString() === productId);

      if (cartItem) {
        // If product exists, increment the quantity
        cartItem.quantity += 1;
      } else {
        // Otherwise, add new item to cart
        user.cart.push({
          productId: product._id,
          name: product.name,
          price: product.price,
          productImg: product.productImg,
          productQuantity: product.quantity
        });
      }

      // Save user with updated cart
      await user.save();

      res.status(200).json({ message: 'Product added to cart', cart: user.cart });
    } catch (error) {
      console.error('Error adding to cart:', error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  deleteFromCart : async (req, res) => {
    try {
      const { userId, productId } = req.body;

      // Find user
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Remove product from cart
      const initialCartLength = user.cart.length;
      user.cart = user.cart.filter(item => item.productId.toString() !== productId);

      if (user.cart.length === initialCartLength) {
        return res.status(404).json({ error: 'Product not found in cart' });
      }

      await user.save();

      res.status(200).json({ message: 'Product removed from cart', cart: user.cart });
    } catch (error) {
      console.error('Error deleting from cart:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
  ,


purchaseProducts : async (req, res) => {
  try {
    const userId = req.body.userId;
    const cartItems = req.body.cart;
    const userInfo = req.body.shippingInfo

    // Find the user
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Add cart items to purchasedProducts
    user.purchasedProducts.push(...cartItems);

    // Create a new order
    const newOrder = new Order({
      name: userInfo.name,
      address: userInfo.address, // Make sure you add address and other fields to the user model
      city: userInfo.city,
      country: userInfo.country,
      postalCode: userInfo.postalCode,
    });

    // Save the new order to the database
    await newOrder.save();

    // Clear the cart
    user.cart = [];

    // Save the user with updated cart and purchasedProducts
    await user.save();

    res.status(200).json({ message: 'Checkout successful', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

getOrder : async (req, res) => {
  try {
    const orders = await Order.find()

    if (!orders) {
      return res.status(404).json({ message: 'No orders found' });
    }

    res.status(200).json({ orders: orders });
  } catch (error) {
    console.log(error.message)
  }
},

updateOrder : async (req, res) => {
  try {
    const { orderId , userId} = req.params;
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });

    const purchasedStatus = await User.findBy(userId)


    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order updated successfully', order });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}
};

module.exports = productController;