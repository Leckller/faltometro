import { useAppSelector } from '../../../hooks/reduxHooks';
import Popup from '../Popup';

function Aula() {
  const { name } = useAppSelector((s) => s.Popup);
  return (
    <Popup>
      <article>
        <p>{name}</p>
      </article>
    </Popup>
  );
}

export default Aula;
