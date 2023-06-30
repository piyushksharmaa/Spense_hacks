const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter Product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter Product description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter Product price"],
    maxLength: [6, "Price cannot exceed 8 figures"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter Product category"],
  },
  Stock: {
    type: Number,
    required: [true, "Please enter Product stock"],
    maxLength: [3, "Stock cannot exceeds 4 figures"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
