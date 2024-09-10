function Form() {
  return (
    <form
      className="flex flex-col gap-5 p-5"
      onSubmit={ (e) => e.preventDefault() }
    >
      <section>
        <label className="flex flex-col gap-2">
          <h2>Email</h2>
          <input
            className="bg-[#F4F4F4] p-2"
            type="text"
            placeholder="Digite seu email"
          />
        </label>

        <label className="flex flex-col gap-2">
          <h2>Senha</h2>
          <input
            className="bg-[#F4F4F4] p-2"
            type="password"
            placeholder="Digite sua senha"
          />
        </label>

        <p className="w-full text-end">
          <a href="a" target="_blank" className="text-[#FF015C]">Esqueceu a senha?</a>
        </p>
      </section>
      <button>Entrar</button>
    </form>
  );
}

export default Form;
