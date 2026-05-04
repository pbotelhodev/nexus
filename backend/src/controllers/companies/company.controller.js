const companyService = require("../../services/companies/company.service");

const listarEmpresas = async (req, res) => {
  try {
    const empresas = await companyService.listarEmpresas();

    return res.json(empresas);
  } catch (err) {
    return res.status(500).json({
      message: "Erro ao listar as empresas",
      error: err.message,
    });
  }
};
const cadastrarEmpresa = async (req, res) => {
  const dadosDaEmpresa = req.body;

  if (!dadosDaEmpresa.nome) {
    return res.status(400).json({
      message: "Título obrigatorio",
    });
  }
  const novaEmpresa = await companyService.cadastrarEmpresa(dadosDaEmpresa);
  return res.status(201).json(novaEmpresa);
};

module.exports = { listarEmpresas, cadastrarEmpresa };
