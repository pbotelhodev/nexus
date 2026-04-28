/* Imports tools */
import { Plus, Tags, Pen } from "lucide-react";
import { useState } from "react";

/* Import components */

import Filtro from "../../components/FoodService/ui/Filtro"
import Loading from "../../components/FoodService/ui/Loading";

const Cardapio = () => {
  /* States */
  const [filterActive, setFilterActive] = useState(1);                            //State do filro atual
  const [editarCardapio, setEditarCardapio ] = useState(false)                    //State para abrir o modal de editar produto
  const [modalNovoProduto, setModalNovoProduto] = useState(false);                //State para abrir o modal de novo Produto
  const [toggleAtivo, settoggleAtivo] = useState(false);                          //State para o Toggle


  /* Funções */

  
  /* Effects */
  
  
  /* bancos provisórios e Variáveis */
  const produtos = [
    {
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      nome: "Hambúrguer Artesanal",
      preco: 32.9,
      legenda: "Blend bovino suculento, pão brioche e cheddar derretido", //Permitir apenas 70 caractheres
      active: true,
      categoria: "Pratos",
    },
    {
      imagem: "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
      nome: "Batata Frita",
      preco: 18.0,
      legenda: "Batatas crocantes por fora e macias por dentro",
      active: true,
      categoria: "Porções",
    },
    {
      imagem: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
      nome: "Refrigerante Lata",
      preco: 6.5,
      legenda: "Bebida gelada para acompanhar sua refeição",
      active: true,
      categoria: "Bebidas",
    },
    {
      imagem:
        "https://images.unsplash.com/photo-1653847174168-5d5ca7f14343?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      nome: "Suco Natural",
      preco: 9.9,
      legenda: "Preparado na hora com frutas frescas",
      active: true,
      categoria: "Bebidas",
    },
    {
      imagem: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      nome: "Pizza Calabresa",
      preco: 49.9,
      legenda: "Massa artesanal, calabresa fatiada e queijo derretido",
      active: true,
      categoria: "Pratos",
    },
    {
      imagem: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52",
      nome: "Brownie com Sorvete",
      preco: 14.9,
      legenda: "Brownie quentinho com sorvete cremoso",
      active: true,
      categoria: "Sobremesas",
    },
    {
      imagem: "https://images.unsplash.com/photo-1561758033-d89a9ad46330",
      nome: "Combo Burger",
      preco: 39.9,
      legenda: "Hambúrguer + batata + refrigerante",
      active: true,
      categoria: "Combos",
    },
    {
      imagem: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      nome: "Salada Caesar",
      preco: 24.9,
      legenda: "Alface fresca, frango grelhado e molho especial",
      active: false,
      categoria: "Entradas",
    },

    // NOVOS PRODUTOS 👇

    {
      imagem: "https://images.unsplash.com/photo-1559847844-5315695dadae",
      nome: "Cheeseburger Duplo",
      preco: 36.9,
      legenda: "Dois hambúrgueres com queijo e molho especial",
      active: true,
      categoria: "Pratos",
    },
    {
      imagem: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      nome: "Costela BBQ",
      preco: 58.9,
      legenda: "Costela assada lentamente com molho barbecue",
      active: true,
      categoria: "Pratos",
    },
    {
      imagem: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      nome: "Anéis de Cebola",
      preco: 19.9,
      legenda: "Empanados crocantes e saborosos",
      active: true,
      categoria: "Porções",
    },
    {
      imagem:
        "https://images.unsplash.com/photo-1632229095740-8c75082087c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFybWVnaWFuYXxlbnwwfHwwfHx8MA%3D%3D",
      nome: "Frango à Parmegiana",
      preco: 42.9,
      legenda: "Filé de frango com molho e queijo gratinado",
      active: true,
      categoria: "Pratos",
    },
    {
      imagem:
        "https://images.unsplash.com/photo-1676722880728-169852c59ea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFyZ3Vlcml0YXxlbnwwfHwwfHx8MA%3D%3D",
      nome: "Pizza Marguerita",
      preco: 45.9,
      legenda: "Molho de tomate, manjericão e queijo",
      active: true,
      categoria: "Pratos",
    },
    {
      imagem:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWlsa3NoYWtlfGVufDB8fDB8fHww",
      nome: "Milkshake Chocolate",
      preco: 15.9,
      legenda: "Cremoso e gelado com calda de chocolate",
      active: true,
      categoria: "Bebidas",
    },
    {
      imagem:
        "https://plus.unsplash.com/premium_photo-1675011652821-7588c110c86d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VjbyUyMGRldG94fGVufDB8fDB8fHww",
      nome: "Suco Detox",
      preco: 11.9,
      legenda: "Mistura refrescante de frutas e hortelã",
      active: true,
      categoria: "Bebidas",
    },
    {
      imagem:
        "https://plus.unsplash.com/premium_photo-1664472757995-3260cd26e477?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2FuZHVpY2hlJTIwbmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
      nome: "Sanduíche Natural",
      preco: 14.9,
      legenda: "Leve e saudável com ingredientes frescos",
      active: true,
      categoria: "Lanches / Porções",
    },
    {
      imagem:
        "https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2FmJUMzJUE5JTIwRXhwcmVzc298ZW58MHx8MHx8fDA%3D",
      nome: "Café Expresso",
      preco: 5.0,
      legenda: "Café intenso e encorpado",
      active: true,
      categoria: "Bebidas",
    },
    {
      imagem:
        "https://plus.unsplash.com/premium_photo-1677607237201-64668c2266ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FwcHVjY2lub3xlbnwwfHwwfHx8MA%3D%3D",
      nome: "Cappuccino",
      preco: 9.5,
      legenda: "Café com leite cremoso e espuma",
      active: true,
      categoria: "Bebidas",
    },
    {
      imagem:
        "https://media.istockphoto.com/id/2189615794/pt/foto/sweet-homemade-key-lime-pie.webp?a=1&b=1&s=612x612&w=0&k=20&c=ruAqwPA-mCLqQ0BtLS7LEZLqOr5GLbGJwJjzLnx1nt4=",
      nome: "Torta de Limão",
      preco: 12.9,
      legenda: "Base crocante com recheio cremoso",
      active: true,
      categoria: "Sobremesas",
    },
    {
      imagem:
        "https://images.unsplash.com/photo-1590872809871-8a1602d5842d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2h1cnJvc3xlbnwwfHwwfHx8MA%3D%3D",
      nome: "Churros",
      preco: 13.9,
      legenda: "Recheado com doce de leite",
      active: true,
      categoria: "Sobremesas",
    },
    {
      imagem:
        "https://images.unsplash.com/photo-1728776448551-7b5baeb1d68f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SG90JTIwZG9nJTIwZXNwZWNpYWx8ZW58MHx8MHx8fDA%3D",
      nome: "Hot Dog Especial",
      preco: 16.9,
      legenda: "Completo com molhos e toppings",
      active: true,
      categoria: "Lanches / Porções",
    },
    {
      imagem:
        "https://images.unsplash.com/photo-1707925222133-a646bfb5d555?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2VydmVqYSUyMGxvbmduZWNrfGVufDB8fDB8fHww",
      nome: "Cerveja Long Neck",
      preco: 8.9,
      legenda: "Gelada e refrescante",
      active: true,
      categoria: "Bebidas",
    },
    {
      imagem:
        "https://images.unsplash.com/photo-1763689389824-dd2cea2e5772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENvbWJvJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      nome: "Combo Família",
      preco: 89.9,
      legenda: "Ideal para compartilhar",
      active: true,
      categoria: "Combos",
    },
  ];
  const categoriasPadrao = [
    {nome: "Tudo", id: 1},
    { nome: "Bebidas", id: 2 },
    { nome: "Entradas", id: 3 },
    { nome: "Pratos", id: 4 },
    { nome: "Porções", id: 5 },
    { nome: "Sobremesas", id: 6 },
    { nome: "Combos", id: 7 },
  ];
  const produtosFilter =
    filterActive === 1
      ? produtos
      : filterActive === 2
        ? produtos.filter((e) => e.categoria == "Bebidas")
        : filterActive === 3
          ? produtos.filter((e) => e.categoria == "Entradas")
          : filterActive === 4
            ? produtos.filter((e) => e.categoria == "Pratos")
            : filterActive === 5
              ? produtos.filter((e) => e.categoria == "Porções")
              : filterActive === 6
                ? produtos.filter((e) => e.categoria == "Sobremesas")
                : filterActive === 7
                  ? produtos.filter((e) => e.categoria == "Combos")
                  : null;

  return (
    <div>
      {/* Div superior */}
      <div className="p-5 flex flex-col lg:flex-row justify-between">
        {/* Filtros */}
        <Filtro
          filtros={categoriasPadrao}
          funcaoFiltro={setFilterActive}
          filtroAtual={filterActive}
        />
        {/* Botao Cadastrar produto */}
        <div
          onClick={() => setModalNovoProduto(!modalNovoProduto)}
          className="flex font-bold text-sm items-center justify-center py-2 px-4 gap-2 rounded-full bg-primary text-white cursor-pointer"
        >
          <Plus className="w-5 h-5" /> Adicionar{" "}
          <span className="hidden md:block">novo produto</span>
        </div>
      </div>
      {/* Div cards cardápio */}
      <div className="p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {produtosFilter.map((e) => (
          /* Card */
          <div className="">
            {/* Imagem */}
            <div className="overflow-hidden rounded-t-2xl max-h-40 flex items-center justify-center">
              <img
                src={e.imagem}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            {/* Grupo das Divs inferiores */}
            <div className="bg-white p-3 h-35 flex flex-col justify-between">
              {/* Nome & Valor */}
              <div>
                <div className="flex justify-between gap-1 h-10">
                  <div className="font-bold text-sm">{e.nome}</div>
                  <div className="font-bold text-sm ">
                    R${e.preco.toFixed(2)}
                  </div>
                </div>

                {/* Legenda */}
                <div className="font-medium text-xs">{e.legenda}</div>
              </div>
              {/* Categoria & edit */}
              <div className="flex justify-between border-t border-gray-100 pt-2">
                <div className="flex text-[10px] font-bold uppercase  gap-1 items-center">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={toggleAtivo}
                    onClick={() => settoggleAtivo(!toggleAtivo)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none ${
                      toggleAtivo ? "bg-[#1aa350]" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition-transform duration-300 ease-in-out ${
                        toggleAtivo ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <div
                  onClick={() => setEditarCardapio(!editarCardapio)}
                  className="flex text-[10px] font-bold uppercase cursor-pointer gap-1 items-center hover:bg-[#16a34a] p-2 rounded-full hover:text-white transition duration-300"
                >
                  <Pen className="w-3 h-3" />
                  Editar
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal Novo Pruduto */}
      {modalNovoProduto && <div>Teste</div>}

      {/* Modal Editar Produto */}
      {editarCardapio && (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Cardapio;
