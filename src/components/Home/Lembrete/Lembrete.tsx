import { useAppDispatch } from '../../../hooks/reduxHooks';
import { ILembrete } from '../../../types';

function Lembrete({ fields }: { fields: ILembrete }) {
  const { deadLine, description, subTitle, title } = fields;
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={ () => {

      } }
    >
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
      <p>{deadLine.toLocaleTimeString()}</p>
    </button>
  );
}

export default Lembrete;
