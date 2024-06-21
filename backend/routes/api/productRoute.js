const express = require('express');
const AddCategoryController = require('../../controller/product/AddCategoryController');
const AddSubCategoryController = require('../../controller/product/AddSubCategoryController');
const ViewSubCategoryController = require('../../controller/product/ViewSubCategoryController');
const ViewCategoryController = require('../../controller/product/ViewCategoryController');
const route = express.Router();

// http://127.0.0.1:8000/product/createcategory
route.post('/createcategory', AddCategoryController);
route.post('/createsubcategory', AddSubCategoryController);
route.get('/viewcategory', ViewCategoryController);
route.get('/viewsubcategory', ViewSubCategoryController);

module.exports = route;
