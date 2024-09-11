import { Aula, Lembrete } from '../components/Home/Index';

function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Lembrete />
      <Aula />
    </main>
  );
}

export default Home;
