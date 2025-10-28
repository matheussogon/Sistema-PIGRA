import { useState } from "react";

function InputCreateAccount({
  usuariosCadastrados,
  setUsuariosCadastrados,
  setMostrarCadastro,
}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [contaCriada, setContaCriada] = useState(false);
  const [erro, setErro] = useState("");

  const handleCadastro = () => {
    const emailLimpo = email.trim().toLowerCase();

    const jaExiste = usuariosCadastrados.some(
      (u) => u.email.toLowerCase() === emailLimpo
    );

    if (jaExiste) {
      setErro("Já existe uma conta com este e-mail!");
      return;
    }

    if (!nome || !email || !senha) {
      setErro("Preencha todos os campos!");
      return;
    }

    const novoUsuario = { nome, email: emailLimpo, senha: senha.trim() };
    setUsuariosCadastrados([...usuariosCadastrados, novoUsuario]);
    setContaCriada(true);
    setErro("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black text-white w-[500px] h-auto rounded-2xl p-8 flex flex-col items-center gap-10">
        {/* Título */}
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold text-[#F58232]">Sistema PIGRA</h1>
          <h2 className="text-1xl font-semibold text-white">
            {contaCriada ? "Conta criada com sucesso!" : "Cadastre uma conta"}
          </h2>
        </div>

        {!contaCriada ? (
          <div className="flex flex-col w-full gap-4">
            {/* Nome */}
            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm text-gray-300">
                Nome de Usuário
              </label>
              <input
                type="text"
                placeholder="Digite seu nome de usuário"
                className="p-3 rounded-md text-black"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm text-gray-300">E-mail</label>
              <input
                type="text"
                placeholder="Digite seu e-mail"
                className="p-3 rounded-md text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Senha */}
            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm text-gray-300">Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                className="p-3 rounded-md text-black"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            {/* Mensagem de erro */}
            {erro && (
              <span className="text-red-500 text-sm text-center">{erro}</span>
            )}

            {/* Botão Cadastrar */}
            <button
              onClick={handleCadastro}
              className="bg-[#F58232] text-white font-bold p-3 rounded-md mt-2 hover:bg-[#e6752c] transition"
            >
              Cadastrar
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-300">
              Sua conta foi criada! Agora você pode fazer login.
            </p>
            <button
              onClick={() => setMostrarCadastro(false)}
              className="bg-[#F58232] text-white font-bold p-3 rounded-md hover:bg-[#e6752c] transition"
            >
              Voltar para Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCreateAccount;
