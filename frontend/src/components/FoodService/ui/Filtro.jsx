const Filtro = ({ filtros, funcaoFiltro, filtroAtual }) => {
  return (
    <>
      <div className="lg:hidden w-full mb-3">
        <select
          value={filtroAtual}
          onChange={(e) => funcaoFiltro(Number(e.target.value))}
          className="w-full max-w-full p-2 px-3 rounded-xl bg-gray-200 font-bold text-xs outline-none truncate"
        >
          {filtros.map((e) => (
            <option key={e.id} value={e.id}>
              {e.nome}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden lg:flex w-fit gap-3 p-2 rounded-full bg-gray-200 font-bold text-xs transition duration-700">
        {filtros.map((e) => (
          <div
            key={e.id}
            onClick={() => funcaoFiltro(e.id)}
            className={`flex px-3 py-2 rounded-full cursor-pointer transition hover:bg-white whitespace-nowrap ${
              filtroAtual === e.id ? "bg-white" : ""
            }`}
          >
            {e.nome}
          </div>
        ))}
      </div>
    </>
  );
};

export default Filtro;
