function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#1E1E1E] text-white w-[500px] h-auto rounded-2xl p-8 flex flex-col items-center gap-10">
        {/* Títulos */}
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold text-[#F58232]">Sistema PIGRA</h1>
          <h2 className="text-1xl font-semibold text-white">
            Faça login em sua conta
          </h2>
        </div>

        {/* Formulário */}
        <div className="flex flex-col w-full gap-4">
          {/* Input Email */}
          <div className="flex flex-col w-full">
            <label className="mb-1 text-sm text-gray-300">E-mail</label>
            <input
              type="text"
              placeholder="Digite seu e-mail"
              className="p-3 rounded-md text-black"
            />
          </div>

          {/* Input Senha */}
          <div className="flex flex-col w-full">
            <label className="mb-1 text-sm text-gray-300">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="p-3 rounded-md text-black"
            />
          </div>

          {/* Botão Entrar */}
          <button className="bg-[#F58232] text-white font-bold p-3 rounded-md mt-2">
            Entrar
          </button>
        </div>

        {/* Botão Criar conta */}
        <button className="text-sm text-gray-400 hover:text-[#F58232] transition">
          Criar conta
        </button>
      </div>
    </div>
  );
}

export default Login;
