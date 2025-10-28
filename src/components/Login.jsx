import { useState } from "react";

function Login({ usuariosCadastrados, setMostrarCadastro, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = () => {
    const emailLimpo = email.trim().toLowerCase();
    const senhaLimpa = senha.trim();

    const usuario = usuariosCadastrados.find(
      (u) => u.email.toLowerCase() === emailLimpo && u.senha === senhaLimpa
    );

    if (usuario) {
      setErro("");
      onLoginSuccess(usuario); // ← chama o App para navegar
    } else {
      setErro("Email ou senha incorretos");
      setSenha("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black text-white w-[500px] h-auto rounded-2xl p-8 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold text-[#F58232]">Sistema PIGRA</h1>
          <h2 className="text-1xl font-semibold text-white">
            Faça login em sua conta
          </h2>
        </div>

        <div className="flex flex-col w-full gap-4">
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

          {erro && (
            <span className="text-red-500 text-sm text-center">{erro}</span>
          )}

          <button
            onClick={handleLogin}
            className="bg-[#F58232] text-white font-bold p-3 rounded-md mt-2 hover:bg-[#e6752c] transition"
          >
            Entrar
          </button>
        </div>

        <button
          onClick={() => setMostrarCadastro(true)}
          className="text-sm text-gray-400 hover:text-[#F58232] transition"
        >
          Criar conta
        </button>
      </div>
    </div>
  );
}

export default Login;
