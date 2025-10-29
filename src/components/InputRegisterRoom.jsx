import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function InputRegisterRoom() {
  const [nomeSala, setNomeSala] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [erro, setErro] = useState("");
  const [salaCadastrada, setSalaCadastrada] = useState(false);
  const [salasCadastradas, setSalasCadastradas] = useState([]);

  // Carrega salas do localStorage ao montar o componente
  useEffect(() => {
    const salas = JSON.parse(localStorage.getItem("salas")) || [];
    setSalasCadastradas(salas);
    console.log("Salas carregadas:", salas); // <-- log inicial
  }, []);

  const handleCadastro = () => {
    if (!nomeSala || !localizacao) {
      setErro("Preencha todos os campos!");
      return;
    }

    // Verifica se já existe uma sala com mesmo nome e localização
    const salaExiste = salasCadastradas.some(
      (sala) =>
        sala.nome.toLowerCase() === nomeSala.toLowerCase() &&
        sala.localizacao.toLowerCase() === localizacao.toLowerCase()
    );

    if (salaExiste) {
      setErro("Já existe uma sala cadastrada com este nome e localização!");
      return;
    }

    // Cria nova sala com ID único
    const novaSala = {
      id: uuidv4(),
      nome: nomeSala,
      localizacao: localizacao,
    };

    const novasSalas = [...salasCadastradas, novaSala];
    setSalasCadastradas(novasSalas);
    localStorage.setItem("salas", JSON.stringify(novasSalas));
    console.log("Salas atualizadas:", novasSalas); // <-- log após cadastro

    setSalaCadastrada(true);
    setErro("");
    setNomeSala("");
    setLocalizacao("");
  };

  return (
    <div className="bg-black text-white w-[500px] rounded-2xl p-8 flex flex-col items-center gap-10">
      {/* Títulos */}
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-[#F58232]">Sistema PIGRA</h1>
        <h2 className="text-base font-semibold text-white text-center">
          {salaCadastrada
            ? "Sala cadastrada com sucesso!"
            : "Digite o nome e a localização da sala na qual deseja cadastrar"}
        </h2>
      </div>

      {/* Formulário */}
      {!salaCadastrada && (
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col w-full">
            <label className="mb-1 text-sm text-gray-300">Sala</label>
            <input
              type="text"
              placeholder="Digite o nome da sala"
              className="p-3 rounded-md text-black"
              value={nomeSala}
              onChange={(e) => setNomeSala(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-1 text-sm text-gray-300">Localização</label>
            <input
              type="text"
              placeholder="Digite o local na qual a sala se encontra"
              className="p-3 rounded-md text-black"
              value={localizacao}
              onChange={(e) => setLocalizacao(e.target.value)}
            />
          </div>
          {erro && <span className="text-red-500">{erro}</span>}
        </div>
      )}

      {/* Botões */}
      <div className="flex flex-col w-full gap-2">
        {!salaCadastrada && (
          <button
            onClick={handleCadastro}
            className="bg-[#F58232] text-white font-bold p-3 rounded-md mt-2"
          >
            Cadastrar
          </button>
        )}

        {salaCadastrada && (
          <button
            onClick={() => setSalaCadastrada(false)}
            className="bg-[#F58232] text-white font-bold p-3 rounded-md mt-2"
          >
            Cadastrar nova sala
          </button>
        )}
      </div>
    </div>
  );
}

export default InputRegisterRoom;
