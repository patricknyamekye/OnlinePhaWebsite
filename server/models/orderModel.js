const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfOrder: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
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
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;