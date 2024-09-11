/* eslint-disable jsx-a11y/label-has-associated-control */
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { toggleClassFinished } from '../../../redux/Reducers/Materias';
import finishDayClass from '../../../utils/finishDayClass';
import Popup from '../Popup';

function Aula() {
  const { Popup: { id }, Materias: { materias } } = useAppSelector((s) => s);
  const aula = materias.find((m) => m.id === id);
  const dispatch = useAppDispatch();
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
              onChange={ () => dispatch(toggleClassFinished({ id, index: i })) }
              checked={ finishDayClass(aula.completed, i) }
            />
          </label>
        ))}
      </section>
    </Popup>
  );
}

export default Aula;
