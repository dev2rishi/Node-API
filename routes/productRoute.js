const express = require('express')

const { getProducts, getProductsById, createProducts, updateProducts, deleteProductById } = require('../controllers/productController')

const router = express.Router()

// create product data using productModel schema

router.post('/',createProducts)

// fetch all product data

router.get('/', getProducts)

// fetch product data by id

router.get('/:id',getProductsById)


// update product data
router.put('/:id', updateProducts)

// delete product data by id
router.delete('/:id',deleteProductById)

module.exports = router

