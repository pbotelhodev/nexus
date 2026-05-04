const express = require("express");
const productController = require("../../controllers/restaurants/productController")

const router = express.Router()

router.get("/products", productController.listarProdutos)
/* router.post("/products", productController.cadastrarProduto) */

module.exports = router