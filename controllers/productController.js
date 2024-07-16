const Product = require('../models/productModel')
const asyncHandler = require('express-async-handlr')


const createProducts = asyncHandler(async(req, res) => {
    try {
     const product = await Product.create(req.body)
     res.status(200).json(product)
 
    }catch(error) {
         console.log(error.message)
        // res.status(500).json({
        //     message: error.message
        // })
         res.status(500)
         throw new Error(error.message)
    }
 
 })

 const getProductsById = asyncHandler(async (req, res)=> {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)  
    }catch (error) {
        // res.status(500).json({
        //     message: error.message
        // })
        res.status(500)
        throw new Error(error.message)
    }
})

 const getProducts = asyncHandler(async (req, res)=> {
    try {
     const product = await Product.find({})
     res.status(200).json(product)  
        
    }catch (error) {
        // res.status(500).json({
        //     message: error.message
        // })
        res.status(500)
        throw new Error(error.message)
    }
})

const updateProducts = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)

        if(!product) {
            // return res.status(404).json({
            //     message: `cannot find any product with ID ${id}`
            // })
            res.status(404)
            throw new Error(`cannnot find any product with ID ${id}`)

        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
        
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const deleteProductById = async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id, req.body)

        if(!product) {
            return res.status(404).json({
                message: `cannot find any product with ID ${id}`
            })
            // res.status(404)
            // throw new Error(`cannnot find any product with ID ${id}`)
        }
        res.status(200).json('Product deleted successfully!')
        
    } catch (error) {
       
        res.status(500).json({
            message: error.message
        })
        // res.status(500)
        // throw new Error(error.message)
    }
}


 module.exports = { getProducts,getProductsById,createProducts,updateProducts,deleteProductById }