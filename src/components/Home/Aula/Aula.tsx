/* eslint-disable sonarjs/prefer-single-boolean-return */
/* eslint-disable no-nested-ternary */
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { toggleClassFinished } from '../../../redux/Reducers/Materias';
import { setPopupType, toggleVisible } from '../../../redux/Reducers/Popup';
import { IAula } from '../../../types';

function Aula({ fields }: { fields: IAula }) {
  const { className, completed, title, id } = fields;

  const dispatch = useAppDispatch();

  const aulasRestantes = completed.reduce((prev, cur) => {
    const act = prev + (cur.date ? 0 : 1);
    return act;
  }, 0);

  const ultimaAulaConcluida = completed
    .find((m, i) => m.date && completed[i + 1]?.date === undefined);

  function finishDayClass():boolean {
    const actualDay = new Date().getDay();
    // Verifica se a aula do dia já foi marcada
    if (ultimaAulaConcluida && ultimaAulaConcluida.date?.getDay() === actualDay) {
      return true;
    }
    // Verifica se a última aula já foi marcada como concluída
    if (completed[completed.length - 1].date !== undefined) {
      return true;
    }
    return false;
  }

  return (
    <article className="bg-white flex items-center gap-5 text-lg flex-wrap max-w-60">
      <article>
        {/* Lógica para mostar a porcentagem de conclusão da matéria */}
        {`${((completed.length - aulasRestantes) / completed.length) * 100}%`}
      </article>
      <button
        className="grow"
        onClick={ () => {
          dispatch(setPopupType({ name: title, type: 'aula', id }));
          dispatch(toggleVisible());
        } }
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <p>
          Aulas restantes:
          <span className="pl-1 font-bold">
            {aulasRestantes}
          </span>
        </p>
        {className && (
          <p>
            Sala:
            <span className="pl-1 font-bold">
              {className}
            </span>
          </p>
        )}
      </button>
      <input
        type="checkbox"
        onClick={ () => dispatch(toggleClassFinished(id)) }
        checked={ finishDayClass() }
      />
    </article>
  );
}

export default Aula;
