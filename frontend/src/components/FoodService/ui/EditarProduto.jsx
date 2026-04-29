import { DollarSign, Edit, FolderPen, Logs, Pen, Tags, X } from "lucide-react";

const EditarProduto = ({ data, setModal }) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-18 lg:left-0 z-9999 flex items-center justify-center bg-white/70  backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm lg:max-w-200 max-h-[90dvh] overflow-y-auto border border-slate-100 grid grid-cols-1 lg:grid-cols-5">
        {/* Left */}
        <div className="p-5 bg-geral col-span-2 flex flex-col gap-5">
          <div className="p-2 border text-xs font-bold border-slate-200 bg-white rounded-4xl flex items-center gap-2 w-fit">
            <span className={`bg-primary p-1 rounded-full gap-2`} />
            Ativo
          </div>
          <div className="flex flex-col gap-2 col-span-2">
            <label
              htmlFor="image"
              className="py-2 px-5 rounded-xl h-full min-h-45 flex flex-col items-center justify-center text-center cursor-pointer  gap-2"
            >
              <div className="aspect-square w-full overflow-hidden rounded-xl">
                <img
                  src={data.foto}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-extrabold text-[10px] text-slate-400">
                PNG, JPG ou WEBP (Max. 5MB)
              </span>
              <input id="image" type="file" className="hidden" />
            </label>
          </div>
        </div>

        {/* Rigth */}
        <div className="p-5 col-span-3 flex gap-5 flex-col">
          {/* Titulo & Legenda & Fechar */}
          <div className="flex gap-5 justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="hidden lg:block p-3 bg-primary  text-white rounded-2xl">
                <Edit className="w-6 h-6 " strokeWidth="1.5" />
              </div>
              <div>
                <p className="font-extrabold text-lg">Editar Produto</p>
                <p className="font-semibold text-sm text-gray-500">
                  Atualize as informações do prato no cardápio.
                </p>
              </div>
            </div>
            <button onClick={() => setModal(false)} className="cursor-pointer">
              <X />
            </button>
          </div>
          {/* Inputs */}
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
                    type="number"
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
          {/* Botões */}
          <div className="text-sm flex gap-3 justify-center md:justify-end -t">
            <button
              onClick={() => setModal(false)}
              className="py-3 px-5 bg-gray-200 font-bold text-gray-700 rounded-2xl cursor-pointer"
            >
              Cancelar
            </button>

            <button className="py-3 px-5 bg-primary font-semibold text-white rounded-2xl flex items-center cursor-pointer">
              Cadastrar
              <span className="hidden md:block ml-1">Produto</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProduto;
