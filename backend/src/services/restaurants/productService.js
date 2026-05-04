const prisma = require("../../db/prisma");

const listarProdutosPorEmpresa = async (idEmpresa) => {
  const produtos = await prisma.restaurantProduct.findMany({
    where: {
      companyId: idEmpresa,
    },
  });

  return produtos;
};

module.exports = {
  listarProdutosPorEmpresa,
};
