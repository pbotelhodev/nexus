const prisma = require("../../db/prisma");

const listarProdutos = async (idEmpresa) => {
  const produtos = await prisma.restaurantProduct.findMany({
    where: {
      companyId: idEmpresa,
    },
  });

  return produtos;
};

module.exports = {
  listarProdutos,
};
