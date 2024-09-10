function OtherOptionsToLogin() {
  return (
    <section className="flex flex-col justify-around items-center ">
      <p>
        Não tem uma conta?
        <a href="a" target="_blank" className="text-[#FF015C] pl-1">Criar</a>
      </p>
      <article className="flex w-full flex-row items-center gap-20 p-5">
        <div className="w-full border-2 border-[#F4F4F4] h-[1px]" />
        <p>Ou</p>
        <div className="w-full border-2 border-[#F4F4F4] h-[1px]" />
      </article>

      <section className="flex flex-row gap-2">
        <button className="bg-[#E7FB01] text-xl font-bold rounded-full size-10">
          G
        </button>
        <button className="bg-[#E7FB01] text-xl font-bold rounded-full size-10">
          F
        </button>
      </section>
    </section>
  );
}

export default OtherOptionsToLogin;
