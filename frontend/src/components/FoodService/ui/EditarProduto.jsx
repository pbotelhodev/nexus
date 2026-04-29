const EditarProduto = (image) => {
  return (
    <div className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm gap-5 p-5">
      {/* Left */}
      <div>
        <img src={image} className="w-[50%]" />
      </div>
      {/* Rigth */}
      <div>
        {/* Titulo & Legenda & Fechar */}
        <div></div>
        {/* Inputs */}
        <div></div>
        {/* Botões */}
        <div></div>
      </div>
    </div>
  );
};

export default EditarProduto;
