const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  productImg: {
    type: String,
    required: true
  },
  productCategory: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 0
  },
  owner: {
    type: ownerSchema
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;