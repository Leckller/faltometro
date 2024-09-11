import { useAppSelector } from '../../../hooks/reduxHooks';
import Aula from './Aula';

function Section() {
  const { materias } = useAppSelector((s) => s.Materias);
  return (
    <section className="flex flex-col w-[80%] max-w-[1000px]">
      <h2 className="text-3xl font-bold">Próximas Aulas</h2>
      {materias && materias.map((l, i) => (
        <Aula fields={ l } key={ l.id + i } />
      ))}
    </section>
  );
}

export default Section;
