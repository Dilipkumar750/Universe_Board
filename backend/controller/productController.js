const Product = require("../models/productModel");
const mongoose = require("mongoose");

let bucket;
mongoose.connection.once("open", () => {
  bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: "productImage",
  });
});

exports.addProduct = async (req, res) => {
  try {
    const { category, subCategory, title, description } = req.body;
    if (!category || !title || !description || !req.file) {
      return res.status(404).json({
        success: false,
        message: "All inputs are required.",
      });
    }

    const uploadStream = bucket.openUploadStream(req.file.originalname);
    uploadStream.end(req.file.buffer);

    uploadStream.on("finish", async () => {
      const newProduct = new Product({
        category,
        subCategory,
        title,
        description,
        image: req.file.originalname,
        imageId: uploadStream.id,
      });

      await newProduct.save();
      return res
        .status(200)
        .json({ success: true, message: "New product Added Success" });
    });

    uploadStream.on("error", (error) => {
      return res.status(500).json({ error: error.message });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to submit report.",
      error: error.message,
    });
  }
};

exports.getProductImage = (req, res) => {
  try {
    const { filename } = req.params;

    const downloadStream = bucket.openDownloadStreamByName(filename);

    downloadStream.on("data", (chunk) => {
      res.write(chunk);
    });

    downloadStream.on("end", () => {
      res.end();
    });

    downloadStream.on("error", (error) => {
      res.status(404).json({ error: "Image not found" });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred.",
      error: error.message,
    });
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred.",
      error: error.message,
    });
  }
};
 
exports.getOneProduct = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({ success: false, message: "id is not get" });
  }
  try {
    const product = await Product.findById(id);
    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred.",
      error: error.message,
    });
  }
};
exports.getOneProductByCategory = async (req, res) => {
  const { category } = req.params;
  if (!category) {
    return res.status(404).json({ success: false, message: "id is not get" });
  }
  try {
    const product = await Product.find({category});
    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred.",
      error: error.message,
    });
  }
};
exports.getOneProductBySubCategory = async (req, res) => {
  const { subCategory } = req.params;
  if (!subCategory) {
    return res.status(404).json({ success: false, message: "id is not get" });
  }
  try {
    const product = await Product.find({subCategory});
    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred.",
      error: error.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body };
    if (!req.file) {
      const result = await Product.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      });

      if (!result) {
        return res
          .status(404)
          .json({ success: false, message: "product not found" });
      }
      return res
        .status(200)
        .json({ success: true, message: "Update successfull", data: result });
    }

    const uploadStream = bucket.openUploadStream(req.file.originalname);
    uploadStream.end(req.file.buffer);

    uploadStream.on("finish", async () => {
      const imageId = uploadStream.id;
      const updatedData = { image: req.file.originalname, imageId, ...data };

      const result = await Product.findByIdAndUpdate(id, updatedData, {
        new: true,
        runValidators: true,
      });

      if (!result) {
        return res
          .status(404)
          .json({ success: false, message: "product not found" });
      }
      return res
        .status(200)
        .json({ success: true, message: "Update successfull", data: result });
    });

    uploadStream.on("error", (error) => {
      return res.status(500).json({
        success: false,
        message: "File upload failed",
        error: error.message,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred.",
      error: error.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.findByIdAndDelete({ _id: id });
    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "product Not Found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "product deleted", data: result });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred.",
      error: error.message,
    });
  }
};
