function InputRegisterRoom() {
  return (
    <div className="bg-black text-white w-[500px] rounded-2xl p-8 flex flex-col items-center gap-10">
      {/* Títulos */}
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-[#F58232]">Sistema PIGRA</h1>
        <h2 className="text-base font-semibold text-white text-center">
          Digite o nome e endereço da sala na qual deseja cadastrar
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
        <div className="flex flex-col w-full">
          <label className="mb-1 text-sm text-gray-300">Rua</label>
          <input
            type="text"
            placeholder="Digite a rua na qual a sala se encontra"
            className="p-3 rounded-md text-black"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-1 text-sm text-gray-300">Número</label>
          <input
            type="text"
            placeholder="Digite o número da rua na qual a sala se encontra"
            className="p-3 rounded-md text-black"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-1 text-sm text-gray-300">Bairro</label>
          <input
            type="text"
            placeholder="Digite o bairro da rua na qual a sala se encontra"
            className="p-3 rounded-md text-black"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <button className="bg-[#F58232] text-white font-bold p-3 rounded-md mt-2">
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default InputRegisterRoom;
