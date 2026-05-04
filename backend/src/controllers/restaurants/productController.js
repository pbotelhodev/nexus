const productService = require("../../services/restaurants/productService");

const listarProdutos = async (req, res) => {
  try {
    const idEmpresa = req.headers["x-company-id"];

    if (!idEmpresa) {
      return res.status(400).json({
        message: "Id da empresa não enviado",
      });
    }
    const produtos = await productService.listarProdutos(idEmpresa);

    return res.status(200).json(produtos);
  } catch (err) {
    res.status(500).json({
      message: "Erro ao listar os produtos",
      error: err.message,
    });
  }
};

module.exports = {
  listarProdutos,
};
