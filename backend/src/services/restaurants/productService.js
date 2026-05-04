const prisma = require("../../db/prisma");

const listarProdutos = async (idEmpresa) => {
  const produtos = await prisma.restaurantProduct.findMany({
    where: {
      companyId: idEmpresa,
    },
  });
  return produtos;
};

const cadastrarProduto = async (idEmpresa, data) => {
  const novoProduto = await prisma.restaurantProduct.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      imageUrl: data.imageUrl,
      category: data.category,
      trackStock: data.trackStock,
      stockQuantity: data.stockQuantity,
      companyId: idEmpresa
    },
  });
  return novoProduto
}

module.exports = {
  listarProdutos,
  cadastrarProduto,
};
