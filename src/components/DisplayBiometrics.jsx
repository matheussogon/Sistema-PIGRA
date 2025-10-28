import { useState } from "react";

function DisplayBiometrics() {
  const [biometrics, setBiometrics] = useState([
    {
      id: 1,
      nome: "João Silva",
      salas: "Sala 1, Sala 2 ",
    },
    {
      id: 2,
      nome: "Maria Souza",
      dataHora: "27/10/2025 15:10",
      salas: "Sala 3, Sala 5",
    },
    {
      id: 3,
      nome: "Carlos Lima",
      dataHora: "27/10/2025 16:05",
      salas: "Sala 4, Sala 9",
    },
    {
      id: 4,
      nome: "Gabriel Lima",
      dataHora: "27/10/2025 17:05",
      salas: "Sala 3, Sala 2",
    },
    {
      id: 5,
      nome: "Lucas Silva",
      dataHora: "27/10/2025 18:00",
      salas: "Sala 1, Sala 10, Sala 1, Sala 10",
    },
    {
      id: 6,
      nome: "João Silva",
      dataHora: "27/10/2025 14:30",
      salas: "Sala 8, Sala 5",
    },
    {
      id: 7,
      nome: "Maria Souza",
      dataHora: "27/10/2025 15:10",
      salas: "Sala 4",
    },
    {
      id: 8,
      nome: "Carlos Lima",
      dataHora: "27/10/2025 16:05",
      salas: "Sala 3",
    },
    {
      id: 9,
      nome: "Gabriel Lima",
      salas: "Sala 9",
    },
    {
      id: 10,
      nome: "Lucas Silva",
      salas: "Sala 10",
    },
  ]);

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
        {biometrics.map((item, index) => (
          <div
            key={item.id}
            className={`border-b border-gray-700 ${
              index % 2 === 0 ? "bg-gray-800/20" : ""
            }`}
          >
            <div className="grid grid-cols-2 max-w-[500px] mx-auto gap-x-16 text-white py-2 text-sm text-center">
              <span>{item.nome}</span>
              <span>{item.salas}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayBiometrics;
