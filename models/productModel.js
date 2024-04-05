const mongoose = require("mongoose") 

const Schema = mongoose.Schema 

const productSchema = new Schema({ 
    productname: { 
        type: String, 
        required: true
    }, 
    brand: { 
        type: String, 
        required: true
    } ,
    quantity: { 
        type: Number, 
        required: true
    }, 
    size:{ 
        type: String, 
        required: true
    }
}, { timestamps: true}) 

module.exports = mongoose.model('productmodel', productSchema) // product model