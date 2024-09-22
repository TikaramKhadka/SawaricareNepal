const { Router } = require('express');
const {getAllCategory, getCategoryById, registerCategory, updateCategoyryById,
     deleteCategoryById} = require('../controllers/category')

const CategoryRoute = Router();

// get all categories
CategoryRoute.get('/category', getAllCategory);

// get Category by ID
CategoryRoute.get('/category/:id', getCategoryById);

// register a new category
CategoryRoute.post('/registercategory', registerCategory);

// update a category
CategoryRoute.put('/category/:id', updateCategoyryById);
// delete category by id
CategoryRoute.delete('/category/:id', deleteCategoryById)

module.exports = CategoryRoute;
