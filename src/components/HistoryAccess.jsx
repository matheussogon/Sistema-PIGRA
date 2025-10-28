import { useState } from "react";

function HistoryAccess() {
  const [historico, setHistorico] = useState([
    {
      id: 1,
      nome: "João Silva",
      dataHora: "27/10/2025 14:30",
      autorizacao: "Permitido",
    },
    {
      id: 2,
      nome: "Maria Souza",
      dataHora: "27/10/2025 15:10",
      autorizacao: "Negado",
    },
    {
      id: 3,
      nome: "Carlos Lima",
      dataHora: "27/10/2025 16:05",
      autorizacao: "Permitido",
    },
    {
      id: 4,
      nome: "Gabriel Lima",
      dataHora: "27/10/2025 17:05",
      autorizacao: "Permitido",
    },
    {
      id: 5,
      nome: "Lucas Silva",
      dataHora: "27/10/2025 18:00",
      autorizacao: "Negado",
    },
    {
      id: 6,
      nome: "João Silva",
      dataHora: "27/10/2025 14:30",
      autorizacao: "Permitido",
    },
    {
      id: 7,
      nome: "Maria Souza",
      dataHora: "27/10/2025 15:10",
      autorizacao: "Negado",
    },
    {
      id: 8,
      nome: "Carlos Lima",
      dataHora: "27/10/2025 16:05",
      autorizacao: "Permitido",
    },
    {
      id: 9,
      nome: "Gabriel Lima",
      dataHora: "27/10/2025 17:05",
      autorizacao: "Permitido",
    },
    {
      id: 10,
      nome: "Lucas Silva",
      dataHora: "27/10/2025 18:00",
      autorizacao: "Negado",
    },
  ]);

  return (
    <div className="bg-black w-[700px] rounded-2xl p-4 flex flex-col justify-center gap-2">
      <h2 className="text-xl font-bold text-white mb-2 text-center">
        Histórico de Acessos
      </h2>

      {/* Cabeçalho da tabela */}
      <div className="grid grid-cols-3 text-gray-400 font-semibold border-b border-gray-600 pb-1 text-sm">
        <span>Nome</span>
        <span>Data/Hora</span>
        <span>Autorização</span>
      </div>

      {/* Dados */}
      <div className="flex flex-col justify-center">
        {historico.map((item, index) => (
          <div
            key={item.id}
            className={`grid grid-cols-3 text-white py-1 text-sm border-b border-gray-700 ${
              index % 2 === 0 ? "bg-gray-800/20" : ""
            }`}
          >
            <span>{item.nome}</span>
            <span>{item.dataHora}</span>
            <span>{item.autorizacao}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryAccess;
