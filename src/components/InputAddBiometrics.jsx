import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";

function InputAddBiometrics() {
  const navigate = useNavigate();
  const [foto, setFoto] = useState(null);
  const [nomePessoa, setNomePessoa] = useState("");
  const [emailPessoa, setEmailPessoa] = useState("");
  const [salaSelecionada, setSalaSelecionada] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const [salas, setSalas] = useState([]);
  const [biometrias, setBiometrias] = useState([]);

  useEffect(() => {
    const salasExistentes = JSON.parse(localStorage.getItem("salas")) || [];
    setSalas(salasExistentes);

    const biometriasExistentes =
      JSON.parse(localStorage.getItem("biometrias")) || [];
    setBiometrias(biometriasExistentes);
  }, []);

  const handleAdicionar = () => {
    if (!nomePessoa || !emailPessoa || !salaSelecionada || !foto) {
      setErro("Preencha todos os campos!");
      return;
    }

    const salaObj = salas.find((s) => s.id === salaSelecionada);
    if (!salaObj) {
      setErro("Selecione uma sala válida!");
      return;
    }

    const jaExiste = biometrias.some(
      (b) =>
        b.emailPessoa === emailPessoa &&
        b.sala === salaObj.nome &&
        b.localizacao === salaObj.localizacao
    );

    if (jaExiste) {
      setErro("Essa pessoa já está cadastrada nessa sala!");
      return;
    }

    const novaBiometria = {
      id: uuidv4(),
      nomePessoa,
      emailPessoa,
      sala: salaObj.nome,
      localizacao: salaObj.localizacao,
      foto: foto.name,
      vetorFacial: [],
    };

    const novasBiometrias = [...biometrias, novaBiometria];
    setBiometrias(novasBiometrias);
    localStorage.setItem("biometrias", JSON.stringify(novasBiometrias));

    setErro("");
    setSucesso(true);
    setNomePessoa("");
    setEmailPessoa("");
    setFoto(null);
    setSalaSelecionada(""); // reseta o select
  };

  return (
    <div className="bg-black text-white w-[500px] rounded-2xl p-8 flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold text-[#F58232]">Sistema PIGRA</h1>
      <h2 className="text-base font-semibold text-white text-center">
        Adicione a biometria de uma pessoa
      </h2>

      {!sucesso ? (
        <>
          {/* Input Foto */}
          <div className="flex flex-col w-full">
            <label className="mb-1 text-sm text-gray-300">Foto da Pessoa</label>

            <label className="bg-[#F58232] text-white p-3 rounded-md text-center cursor-pointer flex items-center justify-center gap-2">
              <Upload size={20} /> {/* Ícone de upload */}
              Enviar foto
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0])
                    setFoto(e.target.files[0]);
                }}
              />
            </label>
            {foto && (
              <span className="text-sm text-gray-300 mt-2">
                Arquivo selecionado: {foto.name}
              </span>
            )}
          </div>

          {/* Input Nome */}
          <div className="flex flex-col w-full">
            <label className="mb-1 text-sm text-gray-300">Nome da Pessoa</label>
            <input
              type="text"
              placeholder="Digite o nome da Pessoa"
              className="p-3 rounded-md text-black w-full"
              value={nomePessoa}
              onChange={(e) => setNomePessoa(e.target.value)}
            />
          </div>

          {/* Input E-mail */}
          <div className="flex flex-col w-full">
            <label className="mb-1 text-sm text-gray-300">E-mail</label>
            <input
              type="email"
              placeholder="Digite o e-mail da Pessoa"
              className="p-3 rounded-md text-black w-full"
              value={emailPessoa}
              onChange={(e) => setEmailPessoa(e.target.value)}
            />
          </div>

          {/* Select de Salas */}
          <div className="flex flex-col w-full">
            <label className="mb-1 text-sm text-gray-300">Sala</label>
            <select
              value={salaSelecionada}
              onChange={(e) => setSalaSelecionada(e.target.value)}
              className="p-3 rounded-md text-black w-full"
            >
              <option value="">Selecione a sala</option>
              {salas.map((sala) => (
                <option key={sala.id} value={sala.id}>
                  {sala.nome} - {sala.localizacao}
                </option>
              ))}
            </select>
          </div>

          {erro && <span className="text-red-500">{erro}</span>}

          <button
            onClick={handleAdicionar}
            className="bg-[#F58232] text-white font-bold p-3 rounded-md w-full"
          >
            Adicionar Biometria
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center gap-4 w-full">
          <span className="text-green-500 font-semibold text-lg">
            Biometria adicionada com sucesso!
          </span>
          <button
            onClick={() => navigate("/account")}
            className="bg-[#F58232] text-white font-bold p-3 rounded-md w-full"
          >
            Voltar à Conta
          </button>
        </div>
      )}
    </div>
  );
}

export default InputAddBiometrics;
