const { isValidObjectId, default: mongoose } = require('mongoose');
const Product = require('../models/productModel'); 

//get  all product 
const getProducts = async(req,res)=>{ 
     const product = await Product.find({}).sort({createAt: -1}) 
    res.status(200).json(product)
} 

//get a single product 
const getProduct = async(req,res) =>{ 
    const{ id } = req.params   

    // if(!mongoose.Types.ObjectId.isValidObject(id)) { 
    //     return res.status(404).json({error: "No such product"})
    // }

    const  product= await Product.findById(id) 

    if(!product) { 
        return res.status(404).json({error: "No such product"})
    } 
res.status(200).json(product)

}


//create new product 
const createproduct =  async (req,res)=>{ 

const {productname, brand, quantity, size} = req.body 

try { 
    const product = await Product.create({productname, brand, quantity, size}) 
    res.status(200).json(product)
} catch (error) {  
    res.status(400).json({error: error.message}) 

} 
} 


//deleta a product 
const deleteProduct = async (req,res)=>{ 
    const { id } = req.params 

    if(!mongoose.Types.ObjectId.isValidObject(id)) { 
        return res.status(404).json({error: "No such product"})
    } 

    const product = await Product.findOneAndDelete({_id: id}) 
    
    if(!product) { 
        return res.status(400).json({error: "No such product"})
    } 
    res.status(200).json(product)
}

//update a product 
const updateProduct = async(req,res) =>{ 
    const { id } = req.params  //extracting id from req.params obj

    if(!mongoose.Types.ObjectId.isValid(id)) { 
        return res.status(404).json({error: 'No such product'})
    }


const Product = await Product.findOneAndUpdate({_id: id},{  
    ...req.body

}) 

if(!Product) { 
    return res.status(400).json({error: "No such product"})
}  

res.status(200).json(Product)
}


module.exports = {  
    createproduct, 
    getProduct,
    getProducts, 
    deleteProduct, 
    updateProduct

}