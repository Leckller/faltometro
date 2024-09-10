import { MdLibraryAdd } from 'react-icons/md';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setPopupType, toggleVisible } from '../../../redux/Reducers/Popup';

function Options() {
  const dispatch = useAppDispatch();
  return (
    <>
      <section
        className="md:hidden h-full w-[33%] flex flex-row items-center justify-end"
      >
        <button
          onClick={ () => {
            dispatch(toggleVisible());
            dispatch(setPopupType({ type: 'create', name: 'Adicionar Matéria' }));
          } }
        >
          <MdLibraryAdd className="object-cover h-full w-6" />
        </button>

      </section>
      <section
        className="md:flex hidden font-semibold h-full w-[33%]
        flex-row items-center justify-end"
      >
        <button
          onClick={ () => {
            dispatch(toggleVisible());
            dispatch(setPopupType({ type: 'create', name: 'Adicionar Matéria' }));
          } }
        >
          Adicionar Matéria
        </button>
      </section>
    </>
  );
}

export default Options;
