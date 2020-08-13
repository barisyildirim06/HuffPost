const express = require('express');
const router = express.Router();
const {ImageUpload, ProductUpload, ProductGet, ProductById} = require('../controllers/product.js')
const { auth } = require("../middleware/auth");

//=================================
//             Product
//=================================

router.post("/uploadImage", auth,ImageUpload);

router.post("/uploadProduct", auth, ProductUpload);

router.post("/getProducts", auth,  ProductGet);

router.get("/products_by_id",auth, ProductById);


module.exports = router;
