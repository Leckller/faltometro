import { useAppSelector } from '../../../hooks/reduxHooks';
import Popup from '../Popup';

function Aula() {
  const { Popup: { id }, Materias: { materias } } = useAppSelector((s) => s);
  const aula = materias.find((m) => m.id === id);
  return (
    <Popup>
      <section className="flex flex-col overflow-y-scroll gap-5 noScroll">
        {aula?.completed.map((m, i) => (
          <label
            key={ aula.title + aula.id + i }
            className="flex justify-between"
          >
            <article className="w-[90%] flex flex-col">
              <h3 className="font-bold">
                {`Aula ${i} - ${m.date ? `Concluída em ${m.date.toLocaleDateString()}`
                  : 'Não concluída'}`}
              </h3>
              <p className="break-words">{m.notes}</p>
            </article>
            <input
              type="checkbox"
            />
          </label>
        ))}
      </section>
    </Popup>
  );
}

export default Aula;
