import { useNavigate } from "react-router-dom";

function AccountButtons() {
  const navigate = useNavigate();
  return (
    <div className="bg-black w-[200px] rounded-2xl p-4 flex flex-col justify-center gap-6">
      <button onClick={() => navigate("/add-biometrics")} className="bg-[#F58232] text-white font-bold py-2 rounded-md hover:bg-orange-500 transition">
        Adicionar Biometria
      </button>
      <button className="bg-[#F58232] text-white font-bold py-2 rounded-md hover:bg-orange-500 transition">
        Remover Biometria
      </button>
      <button
        onClick={() => navigate("/view-biometrics")}
        className="bg-[#F58232] text-white font-bold py-2 rounded-md hover:bg-orange-500 transition"
      >
        Visualizar Biometria
      </button>
      <button className="bg-[#F58232] text-white font-bold py-2 rounded-md hover:bg-orange-500 transition">
        Editar Biometria
      </button>
    </div>
  );
}

export default AccountButtons;
