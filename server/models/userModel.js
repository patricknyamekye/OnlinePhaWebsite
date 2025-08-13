const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  name: String,
  price: Number,
  quantity: {
    type: Number,
    default: 1,
  },
  productImg: {
    type: String,
  },
  productQuantity: {
    type: Number
  }
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  cart: [cartItemSchema],
  purchasedProducts: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      quantity: Number,
      price: Number,
      purchaseDate: { type: Date, default: Date.now },
      status: {
        type: String,
        enum: [
          'Order Received',
          'Preparing Order',
          'Out for Delivery',
          'Delivered'
        ],
        default: 'Order Received',
      }
    }
  ],
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;