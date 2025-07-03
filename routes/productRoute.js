import { Router } from 'express'
import { getProductsById, createProducts, updateProducts, deleteProductById, getProducts } from '../controllers/productController.js'
// import * as productController from '../controllers/productController.js'

const router = Router()

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

export default router
