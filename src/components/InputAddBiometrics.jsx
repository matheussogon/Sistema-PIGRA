import { useState } from "react";

function InputAddBiometrics() {
  const [foto, setFoto] = useState(null); // Armazena o arquivo selecionado

  return (
    <div className="bg-black text-white w-[500px] rounded-2xl p-8 flex flex-col items-center gap-10">
      {/* Títulos */}
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-[#F58232]">Sistema PIGRA</h1>
        <h2 className="text-base font-semibold text-white text-center">
          Envie sua foto e digite o nome da sala na qual deseja fazer a
          biometria
        </h2>
      </div>

      {/* Formulário */}
      <div className="flex flex-col w-full gap-4">
        {/* Input Foto como botão */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-sm text-gray-300">Foto</label>

          {/* Label estilizado como botão */}
          <label className="bg-[#F58232] text-white p-3 rounded-md text-center cursor-pointer">
            Enviar foto
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFoto(e.target.files[0]); // Armazena o arquivo
                }
              }}
            />
          </label>

          {/* Exibir o nome do arquivo selecionado */}
          {foto && (
            <span className="text-sm text-gray-300 mt-2">
              Arquivo selecionado: {foto.name}
            </span>
          )}
        </div>

        {/* Input Sala */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-sm text-gray-300">Sala</label>
          <input
            type="text"
            placeholder="Digite o nome da sala"
            className="p-3 rounded-md text-black"
          />
        </div>

        <button className="bg-[#F58232] text-white font-bold p-3 rounded-md mt-2">
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default InputAddBiometrics;
