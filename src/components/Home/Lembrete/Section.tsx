import Lembrete from './Lembrete';

function Section() {
  return (
    <section className="flex flex-col w-[80%] max-w-[1000px]">
      <h2 className="text-2xl font-semibold">Lembretes</h2>
      {[].map((l) => (
        <Lembrete key={ l } />
      ))}
    </section>
  );
}

export default Section;
