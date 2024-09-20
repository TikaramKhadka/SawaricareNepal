const Router = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const ProductRoute = Router();
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    const Product = mongoose.model('Product', {
        productName: String,
        price:String,
        quantity:Number,
        description: String,
        categoryId: String,
        productImage:String,
        createdDate:Date,
        createdBy:String,
        modifiedDate:Date,
        modifiedBy:Date,
        isActive: Boolean
    });
// Get all Products
    ProductRoute.get('/products', async (req, res)=>{
        try {
            const data = await Product.Find();
            if(!data)
            {
                return res.status(404).send({msg:"products not found"});
            }
            else{
                res.status(200).send(data)
            }
        } catch (error) {
            res.status(500).send({msg:"something went wrong"})
        }
    });

    // get product by Product Id
    ProductRoute.get('/products/:id', async(req, res)=>{
        try {
            var data = await Product.findById(req.params.id)
            if(!data)
                res.status(404).send({msg: `${req.params.id} product not found`})               
            esle 
            res.status(200).send(data)
        } catch (error) {
            res.status(500).send({msg:"something went wrong"})
        }
    });

    ProductRoute.post('/products', async (req, res)=>{
        try {
            const productExist = await Product.exists({productName: req.body.productName})
            if(productExist){
                return res.status(201).send({msg:`${req.body.productName} already exist`});
            }
            const newProduct = await Product.create(req.body)
            res.status(201).send({msg: `${req.body.productName} added successfully`, newProduct});
        } catch (error) {
            res.status(500).send({msg:"something went wrong", error});
        }       

    });
    ProductRoute.put('/products/:id', async (req, res)=>{
        try {
            const data = Product.findByIdAndUpdate(req.params.id, req.body);
            if(!data){

                return res.status(404).send({msg:`${req.params.id} poduct not found`});
            }
            res.status(201).send({msg:`${req.params.id} updated successfully`, data});
        } catch (error) {
            res.status(500).send({msg:"something went worng"});
        }
    })
    ProductRoute.delete('/products/:id', async(req,res)=>{
        try {
            const data = Product.findByIdAndDelete(req.params.id);
            if (!data) {
                return res.status(404).send({msg:`${req.params.id} product not found`});
            }
            res.status(201).send({msg:`${req.params.id} product deleted successfully`});
        } catch (error) {
            res.status(500).send({msg:"something went wrong"});
        }
    })

    module.exports = ProductRoute;