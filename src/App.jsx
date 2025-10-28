import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./components/Login";
import InputCreateAccount from "./components/InputCreateAccount";

function App() {
  const navigate = useNavigate();

  const [usuariosCadastrados, setUsuariosCadastrados] = useState([
    { email: "admin@pigra.com", nome: "Administrador", senha: "123456" },
    { email: "usuario1@pigra.com", nome: "João", senha: "senha123" },
    { email: "usuario2@pigra.com", nome: "Maria", senha: "abc123" },
  ]);

  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  const handleLogin = (usuario) => {
    setUsuarioLogado(usuario);
    navigate("/account", { state: { usuario } });
  };

  return (
    <div className="w-screen h-screen bg-[#F58232] flex justify-center items-center">
      {!mostrarCadastro ? (
        <Login
          usuariosCadastrados={usuariosCadastrados}
          setMostrarCadastro={setMostrarCadastro}
          onLoginSuccess={handleLogin}
        />
      ) : (
        <InputCreateAccount
          usuariosCadastrados={usuariosCadastrados}
          setUsuariosCadastrados={setUsuariosCadastrados}
          setMostrarCadastro={setMostrarCadastro}
        />
      )}
    </div>
  );
}

export default App;
