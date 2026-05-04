const prisma = require("../../db/prisma");

const listarEmpresas = async () => {
  const empresas = await prisma.company.findMany();
  return empresas;
};

const cadastrarEmpresa = async (dadosDaEmpresa) => {
  const novaEmpresa = await prisma.company.create({
    data: {
      name: dadosDaEmpresa.name,
      segment: dadosDaEmpresa.segment,
      document: dadosDaEmpresa.document,
      phone: dadosDaEmpresa.phone,
      email: dadosDaEmpresa.email,
    },
  });
  return novaEmpresa;
};

module.exports = { listarEmpresas, cadastrarEmpresa };
