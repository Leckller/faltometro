import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <section
      className="flex flex-col h-screen w-screen items-center justify-around bg-[#E7FB01]"
    >
      <p className="text-2xl font-bold text-left">
        Tudo vazio por aqui...
      </p>
      <button onClick={ () => navigate('/') }>
        <p className="flex gap-3 font-semibold text-white bg-[#333333] p-3 rounded-full">
          Voltar para página inicial
        </p>
      </button>
    </section>
  );
}

export default NotFound;
