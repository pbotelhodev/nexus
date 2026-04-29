import { X, Image } from "lucide-react";

const NovoProduto = ({ setModal }) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-18 lg:left-0 z-9999 flex items-center justify-center bg-white/70 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm lg:max-w-205 max-h-[90dvh] overflow-y-auto">
        {/* Header */}
        <div className="flex gap-5 justify-between items-center p-5">
          <div>
            <p className="font-bold text-lg">Novo Produto</p>
            <p className="font-medium text-sm text-gray-500">
              Adicione um novo item ao cardápio do Nexus ERP.
            </p>
          </div>

          <button onClick={() => setModal(false)} className="cursor-pointer">
            <X />
          </button>
        </div>

        {/* Inputs */}
        <div className="bg-[#f5f3f3] p-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Inputs de texto */}
            <div className="flex flex-col gap-3">
              <label className="flex flex-col font-bold text-sm">
                Nome do Produto
                <input
                  className="pl-3 h-10 font-semibold rounded-xl bg-white  mt-1"
                  placeholder="Ex: Hamburguer Artesanal"
                  type="text"
                />
              </label>

              <label className="flex flex-col font-bold text-sm">
                Categoria
                <select className="h-10 pl-3 font-medium rounded-xl bg-white  mt-1">
                  <option>Bebida</option>
                  <option>Entrada</option>
                  <option>Prato</option>
                  <option>Porção</option>
                  <option>Sobremesa</option>
                  <option>Combo</option>
                </select>
              </label>

              <label className="flex flex-col font-bold text-sm">
                Preço
                <div className="h-10 rounded-xl bg-white  flex items-center pl-3">
                  <span className="font-medium">R$</span>
                  <input
                    className="font-semibold h-full w-full pl-2 outline-none"
                    placeholder="00.00"
                    type="text"
                  />
                </div>
              </label>
            </div>

            {/* Upload de imagem */}
            <div className="flex flex-col gap-2">
              <p className="font-bold text-sm">Imagem do Produto</p>

              <label
                htmlFor="image"
                className="bg-[#eeeff0] rounded-xl h-full min-h-45 flex flex-col items-center justify-center text-center cursor-pointer  -dashed"
              >
                {" "}
                <span className="p-5 bg-white rounded-full text-black mb-1">
                  <Image className="" />
                </span>
                <span className="font-bold">Arraste a imagem aqui</span>
                <span className="text-sm text-gray-500">
                  ou clique para fazer upload
                </span>
                <input id="image" type="file" className="hidden" />
              </label>
            </div>
          </div>

          {/* Legenda (pode expandir depois) */}
          <div className="mt-5">
            <label className="flex flex-col font-bold text-sm">
              Descrição
              <input
                type="text"
                className="mt-1 p-3 rounded-xl bg-white  resize-none h-10"
                placeholder="Ex: Pão brioche, carne 180g, queijo cheddar..."
                maxLength={80}
              />
            </label>
          </div>
        </div>

        {/* Botões */}
        <div className="p-5 text-sm flex gap-3 justify-center md:justify-end -t">
          <button
            onClick={() => setModal(false)}
            className="py-3 px-5 bg-gray-200 text-gray-700 rounded-2xl"
          >
            Cancelar
          </button>

          <button className="py-3 px-5 bg-primary text-white rounded-2xl flex items-center">
            Cadastrar
            <span className="hidden md:block ml-1">Produto</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NovoProduto;
