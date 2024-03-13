const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');

const productRoutes = express.Router();

//create product
productRoutes.post('/createProduct',createProduct)

//get product
productRoutes.get('/getProducts',getProducts)

//update a product
productRoutes.put("/updateProduct/:id",updateProduct)

//delete a product
productRoutes.delete("/deleteProduct/:id",deleteProduct)

module.exports = productRoutes 