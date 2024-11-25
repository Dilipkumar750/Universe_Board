const express = require('express')
const multer = require('multer');
const { getAllProduct, getOneProduct, addProduct, updateProduct, getProductImage, deleteProduct, getOneProductByCategory, getOneProductBySubCategory } = require('../controller/productController');
const router = express.Router()
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/get_all_product',getAllProduct)
router.get('/get_one_product/:id',getOneProduct)
router.get('/get_category/:category',getOneProductByCategory)
router.get('/get_subcategory/:subCategory',getOneProductBySubCategory)
router.get('/get_product_image/:filename',getProductImage)
router.post('/add_product',upload.single('file'),addProduct)
router.post('/update_product/:id',upload.single('file'),updateProduct)
router.delete('/delete_product/:id',deleteProduct)


module.exports = router