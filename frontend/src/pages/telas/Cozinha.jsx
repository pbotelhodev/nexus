/* Imports Tools */
import { Hourglass, CookingPot, CheckCircle, CheckCheck } from "lucide-react";

/* Imports COmponents */
import CardKDS from "../../components/cardKDS.jsx";
import CardKDSPronto from "../../components/cardKDSPronto.jsx";

/* Imports listas */
import { pedidos } from "../../data/pedidos.js";


const CozinhaKDS = () => {
  return (
    <div className="p-5 grid grid-cols-1 lg:grid-cols-4 gap-10">
      {/* Pedidos esperando */}
      <div className="">
        <CardKDS pedidos={pedidos} status={"pendente"} icon={Hourglass} />
      </div>

      {/* Preparando pedidos*/}
      <div className="">
        <CardKDS pedidos={pedidos} status={"em preparo"} icon={CookingPot} />
      </div>

      {/* Pedidos prontos */}
      <div className="">
        <CardKDSPronto pedidos={pedidos} status={"pronto / saída"} icon={CheckCircle} />
      </div>

      {/* Pedidos coletados */}
      <div className="">
        <CardKDSPronto pedidos={pedidos} status={"coletados"} icon={CheckCheck} />
      </div>
    </div>
  );
};

export default CozinhaKDS;
