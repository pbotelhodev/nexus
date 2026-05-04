const express = require("express");
const companyController = require("../../controllers/companies/company.controller");

const router = express.Router();

router.get("/empresas", companyController.listarEmpresas);
router.post("/empresas", companyController.cadastrarEmpresa);

module.exports = router;
