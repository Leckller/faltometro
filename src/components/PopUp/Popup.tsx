import { ReactNode } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { toggleVisible } from '../../redux/Reducers/Popup';

// Componente de background para a popup
// Para criar um popup basta criar um componente qualquer e encapsular dentro da tag <Popup> </Popup>
function Popup({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  return (
    // Pequena separação em sections para dar o evento de click fora do alerta, e assim fazendo com que o mesmo acabe fechando
    <section className="flex justify-center items-center w-screen h-screen absolute">
      <section
        className="absolute flex justify-center items-center
      w-screen h-screen bg-[rgba(0,0,0,0.25)]"
        onMouseDownCapture={ () => dispatch(toggleVisible()) }
      />
      <section className="absolute w-[80%] h-[80%] max-w-[1000px] max-h-[600px]">
        {children}
      </section>
    </section>
  );
}

export default Popup;
