import {
  X,
  Image,
  Logs,
  DollarSign,
  Tags,
  FolderPen,
  Plus,
} from "lucide-react";

const NovoProduto = ({ setModal }) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-18 lg:left-0 z-9999 flex items-center justify-center bg-white/70 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm lg:max-w-200 max-h-[90dvh] overflow-y-auto">
        {/* Header */}
        <div className="flex gap-5 justify-between items-center p-5">
          <div className="flex items-center gap-3">
            <div className="hidden lg:block p-2 bg-primary  text-white rounded-2xl">
              <Plus className="w-7 h-7 " strokeWidth="2.5" />
            </div>
            <div>
              <p className="font-extrabold text-lg">Novo Produto</p>
              <p className="font-semibold text-sm text-gray-500">
                Adicione um novo item ao cardápio do Nexus ERP.
              </p>
            </div>
          </div>
          <button onClick={() => setModal(false)} className="cursor-pointer">
            <X />
          </button>
        </div>

        {/* Inputs */}
        <div className="bg-slate-50 p-5">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Inputs de texto */}
            <div className="flex flex-col gap-3 col-span-3 justify-between">
              <div className="flex flex-col font-bold text-sm">
                <div className="flex gap-1 items-center">
                  <FolderPen className="w-3 text-gray-500" />
                  Nome do Produto
                </div>
                <input
                  className="pl-3 h-10 font-semibold rounded-xl bg-white mt-1 border border-slate-300"
                  placeholder="Ex: Hamburguer Artesanal"
                  type="text"
                />
              </div>

              <div className="justify-between gap-5 md:flex">
                <div className="flex flex-col font-bold text-sm w-full">
                  <div className="flex gap-1 items-center">
                    <Tags className="w-3 text-gray-500" />
                    Categoria
                  </div>
                  <select className="h-10 pl-3 font-medium rounded-xl bg-white mt-1 border border-slate-300">
                    <option>Bebida</option>
                    <option>Entrada</option>
                    <option>Prato</option>
                    <option>Porção</option>
                    <option>Sobremesa</option>
                    <option>Combo</option>
                  </select>
                </div>

                <div className="flex flex-col font-bold text-sm w-full">
                  <div className="flex gap-1 items-center">
                    <DollarSign className="w-3 text-gray-500" />
                    Preço
                  </div>
                  <div className="h-10 rounded-xl bg-white  flex items-center pl-3 border border-slate-300">
                    <span className="font-medium">R$</span>
                    <input
                      className="font-semibold h-full w-full pl-2 outline-none"
                      placeholder="00.00"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-bold text-sm">
                <div className="flex gap-1 items-center">
                  <Logs className="w-3 text-gray-500" />
                  Descrição
                </div>
                <textarea
                  className=" p-3 rounded-xl bg-white  resize-none border border-slate-300"
                  placeholder="Ex: Pão brioche, carne 180g, queijo cheddar..."
                  maxLength={80}
                />
              </div>
            </div>

            {/* Upload de imagem */}
            <div className="flex flex-col gap-2 col-span-2">
              <p className="font-bold text-sm">Mídia do Produto</p>

              <label
                htmlFor="image"
                className="bg-white py-10 px-12 rounded-xl h-full min-h-45 flex flex-col items-center justify-center text-center cursor-pointer border border-slate-300 border-dashed gap-2"
              >
                {" "}
                <span className="p-5 bg-slate-100 rounded-full text-slate-400 mb-1">
                  <Image className="" />
                </span>
                <span className="font-bold">Upload da Imagem</span>
                <span className="text-xs text-slate-400">
                  Arraste sua foto aqui ou{" "}
                  <span className="text-primary">procure no computador</span>
                </span>
                <span className="font-extrabold text-[10px] text-slate-400">
                  PNG, JPG ou WEBP (Max. 5MB)
                </span>
                <input id="image" type="file" className="hidden" />
              </label>
            </div>
          </div>

          {/* Legenda (pode expandir depois) */}
          <div className="mt-5"></div>
        </div>

        {/* Botões */}
        <div className="p-5 text-sm flex gap-3 justify-center md:justify-end -t">
          <button
            onClick={() => setModal(false)}
            className="py-3 px-5 bg-gray-200 font-bold text-gray-700 rounded-2xl"
          >
            Cancelar
          </button>

          <button className="py-3 px-5 bg-primary font-semibold text-white rounded-2xl flex items-center">
            Cadastrar
            <span className="hidden md:block ml-1">Produto</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NovoProduto;
