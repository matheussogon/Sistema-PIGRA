import { useState, useEffect } from "react";

function DisplayBiometrics() {
  const [biometrics, setBiometrics] = useState([]);

  useEffect(() => {
    const biometriasExistentes =
      JSON.parse(localStorage.getItem("biometrias")) || [];
    setBiometrics(biometriasExistentes);
  }, []);

  return (
    <div className="bg-black w-[700px] rounded-2xl p-4 flex flex-col justify-center gap-2">
      {/* Cabeçalho da tabela */}
      <div className="border-b border-gray-600">
        <div className="grid grid-cols-2 max-w-[500px] mx-auto gap-x-16 text-gray-400 py-4 font-semibold text-sm text-center">
          <span>Nome</span>
          <span>Salas Autorizadas</span>
        </div>
      </div>

      {/* Dados */}
      <div className="flex flex-col justify-center">
        {biometrics.length > 0 ? (
          biometrics.map((item, index) => (
            <div
              key={item.id}
              className={`border-b border-gray-700 ${
                index % 2 === 0 ? "bg-gray-800/20" : ""
              }`}
            >
              <div className="grid grid-cols-2 max-w-[500px] mx-auto gap-x-16 text-white py-2 text-sm text-center">
                <span>{item.nomePessoa}</span>
                <span>
                  {item.sala} ({item.localizacao})
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400 py-4">
            Nenhuma biometria cadastrada.
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayBiometrics;
