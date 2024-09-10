function Form() {
  return (
    <form
      className="flex flex-col gap-5 p-5 items-center"
      onSubmit={ (e) => e.preventDefault() }
    >
      <section className="w-full">
        <label className="flex flex-col gap-2">
          <h2 className="font-semibold">Email</h2>
          <input
            className="bg-[#F4F4F4] p-3 rounded-3xl"
            type="text"
            placeholder="Digite seu email"
          />
        </label>

        <label className="flex flex-col gap-2">
          <h2 className="font-semibold">Senha</h2>
          <input
            className="bg-[#F4F4F4] p-3 rounded-3xl"
            type="password"
            placeholder="Digite sua senha"
          />
        </label>

        <p className="w-full text-end">
          <a href="a" target="_blank" className="text-[#FF015C]">Esqueceu a senha?</a>
        </p>
      </section>
      <button className="bg-[#333333] w-full text-white p-4 rounded-3xl max-w-[400px]">
        Entrar
      </button>
    </form>
  );
}

export default Form;
