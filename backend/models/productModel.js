const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    category: {
      type: String,
    },
    subCategory: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    imageId: {
      type: String,
    },
    details: [
      {
        name: { type: String },
        value: { type: String },
      }
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.mongoose.model("products", productSchema);
