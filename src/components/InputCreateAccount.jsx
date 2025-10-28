function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black text-white w-[500px] h-auto rounded-2xl p-8 flex flex-col items-center gap-10">
        {/* Títulos */}
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold text-[#F58232]">Sistema PIGRA</h1>
          <h2 className="text-1xl font-semibold text-white">
            Cadastre uma conta
          </h2>
        </div>

        {/* Formulário */}
        <div className="flex flex-col w-full gap-4">
          {/* Input Nome */}
          <div className="flex flex-col w-full">
            <label className="mb-1 text-sm text-gray-300">Nome Completo</label>
            <input
              type="text"
              placeholder="Digite seu nome completo"
              className="p-3 rounded-md text-black"
            />
          </div>
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

          {/* Botão Cadastrar */}
          <button className="bg-[#F58232] text-white font-bold p-3 rounded-md mt-2">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
