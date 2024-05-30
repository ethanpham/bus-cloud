const { Product } = require("../models/productModel");

const productController = {
    getProduct: async(req, res) =>{
        try {
            const {id} = req.params;
            const product = await Product.findById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },

    getAllProducts: async(req, res) => {
        try {
            const products = await Product.find({});
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },

    addProduct: async(req, res) => {
        try {
            const product = await Product.create(req.body)
            res.status(200).json(product);
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message})
        }
    },

    updateProduct: async(req, res) => {
        try {
            const {id} = req.params;
            console.log(id)
            const product = await Product.findByIdAndUpdate(id, req.body);
            // we cannot find any product in database
            if(!product){
                return res.status(404).json({message: `Cannot find any product with ID ${id}`})
            }
            const updatedProduct = await Product.findById(id);
            res.status(200).json(updatedProduct);
            
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },

    deleteProduct: async(req, res) =>{
        try {
            const {id} = req.params;
            const product = await Product.findByIdAndDelete(id);
            if(!product){
                return res.status(404).json({message: `Cannot find any product with ID ${id}`})
            }
            res.status(200).json(product);
            
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },
}

module.exports = productController;