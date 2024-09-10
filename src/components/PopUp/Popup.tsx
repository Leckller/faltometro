import { ReactNode } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { toggleVisible } from '../../redux/Reducers/Popup';

// Componente de background para a popup
// Para criar um popup basta criar um componente qualquer e encapsular dentro da tag <Popup> </Popup>
function Popup({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const { name, type } = useAppSelector((s) => s.Popup);
  return (
    // Pequena separação em sections para dar o evento de click fora do alerta, e assim fazendo com que o mesmo acabe fechando
    <section className="flex justify-center items-center w-screen h-screen absolute">

      <section
        className="absolute flex justify-center items-center
      w-screen h-screen bg-[rgba(0,0,0,0.25)]"
        onMouseDownCapture={ () => dispatch(toggleVisible()) }
      />

      {/* Este é o html do popup */}
      <section
        className="bg-[#FEFFF2] absolute p-2 flex flex-col gap-5
        w-[80%] h-[80%] max-w-[1000px] max-h-[600px]"
      >
        <section className="flex flex-row justify-between">
          <h2 className="font-semibold text-2xl">{name}</h2>
          <button
            onClick={ () => dispatch(toggleVisible()) }
            className="text-2xl"
          >
            <IoCloseCircleOutline />
          </button>
        </section>

        {children}
      </section>

    </section>
  );
}

export default Popup;
