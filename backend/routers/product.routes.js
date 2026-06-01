const express = require("express");
const router = express.Router();
const productCont = require("../controllers/product.controller");
const {productSchema} = require("../middlewares/product.validation");
const {verifyAdmin} = require("../middlewares/verfiyAdmin.middleware");
const {verifyToken} = require("../middlewares/verifyToken.middleware");
const upload = require("../middlewares/multer.middleware")

router.get('/',productCont.getAllProducts);
router.get('/:id',productCont.getProductById);
router.post('/',verifyToken,verifyAdmin,productSchema,productCont.createProduct);
router.put('/:id',verifyToken,verifyAdmin,productSchema,productCont.updateProduct);
router.delete('/:id',verifyToken,verifyAdmin,productCont.deleteProduct);
router.post('/:id/upload-image', verifyToken, verifyAdmin, upload.single('image'), productCont.uploadProductImage
);


module.exports = router;