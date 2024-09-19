const { Router } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const CategoryRoute = Router();

mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const Category = mongoose.model('Category', {
    categoryName: String,
    description: String,
    categoryImage: String,
    isActive: Boolean,
    createDate:Date,
    createdBy:String,
    modifiedBy:String,
    modifiedDate:Date

});

// Get all categories
CategoryRoute.get('/category', async (req, res) => {
    try {
        const data = await Category.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send({ msg: "Data not found", error });
    }
});

// Get Category by ID
CategoryRoute.get('/category/:id', async (req, res) => {
    try {
        const data = await Category.findById(req.params.id);
        if (!data) {
            return res.status(404).send({ msg: `${req.params.id} Category not found` });
        }
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ msg: "Error fetching category", error });
    }
});

// Register a new category
CategoryRoute.post('/registercategory', async (req, res) => {
    try {
        const categoryExist = await Category.exists({ categoryName: req.body.categoryName });
        if (categoryExist) {
            return res.status(404).send({ msg: "Category already exists" });
        }
        const newCategory = await Category.create(req.body);
        res.status(201).send({ msg: "Category added successfully", newCategory });
    } catch (error) {
        res.status(500).send({ msg: 'Error registering category', error });
    }
});

// Update a category
CategoryRoute.put('/category/:id', async (req, res) => {
    try {
        const data = await Category.findByIdAndUpdate(req.params.id, req.body);
        if (!data) {
            return res.status(404).send({ msg: 'Category not found' });
        }
        res.status(201).send({ msg: `${req.params.id} category updated successfully`, data });
    } catch (error) {
        res.status(500).send({ msg: 'Error updating category', error });
    }
});
CategoryRoute.delete('/category/:id', async (req,res)=>{
    try {
        var data = category.findByIdAndDelete(req.params.id)  
        if (!data) {
            return res.status(404).send({ msg: `${req.params.id} category not found` });            
        }  
        res.status(201).send({ msg: `${req.params.id} category deleted successfully` });
    } catch (error) {
        res.status(500).send({ msg: "something went wrong"});
    }
   
})

module.exports = CategoryRoute;
