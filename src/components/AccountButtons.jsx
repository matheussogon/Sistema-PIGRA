function AccountButtons() {
  return (
    <div className="bg-black w-[200px] rounded-2xl p-4 flex flex-col justify-center gap-6">
      <button className="bg-[#F58232] text-white font-bold py-2 rounded-md hover:bg-orange-500 transition">
        Adicionar
      </button>
      <button className="bg-[#F58232] text-white font-bold py-2 rounded-md hover:bg-orange-500 transition">
        Remover
      </button>
      <button className="bg-[#F58232] text-white font-bold py-2 rounded-md hover:bg-orange-500 transition">
        Visualizar Biometria
      </button>
      <button className="bg-[#F58232] text-white font-bold py-2 rounded-md hover:bg-orange-500 transition">
        Editar
      </button>
    </div>
  );
}

export default AccountButtons;
