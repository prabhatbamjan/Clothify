//mongodb+srv://aakritmaharjan01:<password>@cluster0.svtvi9a.mongodb.net/

const express = require('express')   
const {
    createproduct, 
    getProduct, 
    getProducts ,
    deleteProduct,
    updateProduct
} = require ('../controllers/productController')

//const productModel = require('../models/productModel');

const router = express.Router() 

//all products
router.get('/', getProducts)

//GET a single product 
router.get ('/:id', getProduct)

//add a new product 
router.post('/', createproduct)


//delete a new product 
router.delete('/:id', deleteProduct)

//Update a  product 
router.patch('/:id',updateProduct)

module.exports = router