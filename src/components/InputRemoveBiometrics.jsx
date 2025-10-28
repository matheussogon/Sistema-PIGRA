function InputAddBiometrics() {
  return (
    <div className="bg-black text-white w-[500px] rounded-2xl p-8 flex flex-col items-center gap-10">
      {/* Títulos */}
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-[#F58232]">Sistema PIGRA</h1>
        <h2 className="text-base font-semibold text-white text-center">
          Digite o nome da sala na qual deseja remover a biometria
        </h2>
      </div>

      {/* Formulário */}
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col w-full">
          <label className="mb-1 text-sm text-gray-300">Sala</label>
          <input
            type="text"
            placeholder="Digite o nome da sala"
            className="p-3 rounded-md text-black"
          />
        </div>

        <button className="bg-[#F58232] text-white font-bold p-3 rounded-md mt-2">
          Remover
        </button>
      </div>
    </div>
  );
}

export default InputAddBiometrics;
