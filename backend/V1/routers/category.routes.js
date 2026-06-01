const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/category.controller")
const {verifyAdmin} = require("../middlewares/verfiyAdmin.middleware");
const {categorySchema} = require("../middlewares/category.validation.middleware");
const {verifyToken} = require("../middlewares/verifyToken.middleware");


router.get('/',categoriesController.getAllCategories);
router.get('/:id',categoriesController.getCategoryById);
router.post('/',verifyToken,verifyAdmin,categorySchema,categoriesController.createCategory);
router.put('/:id',verifyToken,verifyAdmin,categorySchema,categoriesController.updateCategoryById);
router.delete('/:id',verifyToken,verifyAdmin,categoriesController.deleteCategoryById);

module.exports = router;