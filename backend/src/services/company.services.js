const prisma = require("../db/prisma")

const listarEmpresas =  async () => {
    const empresas = await prisma.company.findMany();

    return empresas
}

require.exports = {listarEmpresas,};