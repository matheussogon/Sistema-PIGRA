import { useState, useEffect } from "react";

function InputRemoveBiometrics() {
  const [emailPessoa, setEmailPessoa] = useState("");
  const [salaSelecionada, setSalaSelecionada] = useState("");
  const [biometrias, setBiometrias] = useState([]);
  const [salas, setSalas] = useState([]);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    // Carrega biometrias
    const biometriasExistentes =
      JSON.parse(localStorage.getItem("biometrias")) || [];
    setBiometrias(biometriasExistentes);

    // Carrega salas
    const salasExistentes = JSON.parse(localStorage.getItem("salas")) || [];
    setSalas(salasExistentes);
  }, []);

  const handleRemover = () => {
    if (!emailPessoa || !salaSelecionada) {
      setMensagem("Preencha todos os campos!");
      return;
    }

    // Verifica se a biometria existe
    const existe = biometrias.some(
      (b) => b.emailPessoa === emailPessoa && b.sala === salaSelecionada
    );

    if (!existe) {
      setMensagem(
        "Não existe biometria cadastrada com este e-mail para a sala informada!"
      );
      return;
    }

    // Remove a biometria
    const novasBiometrias = biometrias.filter(
      (b) => !(b.emailPessoa === emailPessoa && b.sala === salaSelecionada)
    );

    setBiometrias(novasBiometrias);
    localStorage.setItem("biometrias", JSON.stringify(novasBiometrias));
    setMensagem("Biometria removida com sucesso!");
    setEmailPessoa("");
    setSalaSelecionada("");
  };

  return (
    <div className="bg-black text-white w-[500px] rounded-2xl p-8 flex flex-col items-center gap-10">
      {/* Títulos */}
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-[#F58232]">Sistema PIGRA</h1>
        <h2 className="text-base font-semibold text-white text-center">
          Escolha a sala e digite o e-mail da pessoa para remover a biometria
        </h2>
      </div>

      {/* Formulário */}
      <div className="flex flex-col w-full gap-4">
        {/* Input E-mail */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-sm text-gray-300">E-mail da Pessoa</label>
          <input
            type="email"
            placeholder="Digite o e-mail da pessoa"
            className="p-3 rounded-md text-black"
            value={emailPessoa}
            onChange={(e) => setEmailPessoa(e.target.value)}
          />
        </div>

        {/* Select Sala */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-sm text-gray-300">Sala</label>
          <select
            className="p-3 rounded-md text-black"
            value={salaSelecionada}
            onChange={(e) => setSalaSelecionada(e.target.value)}
          >
            <option value="">Selecione a sala</option>
            {salas.map((s) => (
              <option key={s.id} value={s.nome}>
                {s.nome} - {s.localizacao}
              </option>
            ))}
          </select>
        </div>

        {/* Mensagem de feedback */}
        {mensagem && <span className="text-yellow-500">{mensagem}</span>}

        <button
          onClick={handleRemover}
          className="bg-[#F58232] text-white font-bold p-3 rounded-md mt-2"
        >
          Remover Biometria
        </button>
      </div>
    </div>
  );
}

export default InputRemoveBiometrics;
