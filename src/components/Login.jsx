import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [usuariosCadastrados, setUsuariosCadastrados] = useState([]);

  useEffect(() => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuariosCadastrados(usuarios);
  }, []);

  const handleLogin = () => {
    const usuario = usuariosCadastrados.find(
      (u) => u.email === email && u.senha === senha
    );

    if (usuario) {
      setErro("");
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      navigate("/account");
    } else {
      setErro("Email ou senha incorretos");
      setSenha("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black text-white w-[500px] h-auto rounded-2xl p-8 flex flex-col items-center gap-10">
        <h1 className="text-4xl font-bold text-[#F58232]">Sistema PIGRA</h1>
        <h2 className="text-1xl font-semibold text-white">
          Faça login em sua conta
        </h2>

        <input
          type="text"
          placeholder="E-mail"
          className="p-3 rounded-md text-black w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="p-3 rounded-md text-black w-full"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {erro && <span className="text-red-500">{erro}</span>}

        <button
          onClick={handleLogin}
          className="bg-[#F58232] p-3 mt-2 w-full rounded-md"
        >
          Entrar
        </button>

        <button
          onClick={() => navigate("/create-account")}
          className="text-gray-400 mt-4"
        >
          Criar conta
        </button>
      </div>
    </div>
  );
}

export default Login;
