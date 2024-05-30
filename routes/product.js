const productController = require("../controllers/productController");

const router = require("express").Router();

//GET PRODUCT
router.get("/products/:id", productController.getProduct);

//GET ALL PRODUCTS
router.get("/products", productController.getAllProducts);

//ADD PRODUCT
router.post("/products", productController.addProduct);

//UPDATE PRODUCT
router.put("/products/:id", productController.updateProduct);

//DELETE PRODUCT
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;