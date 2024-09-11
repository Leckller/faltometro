import { ReactNode } from 'react';
import { Create, Aula, Lembrete } from './Popups/index';
import { Popups } from '../../types/Popup';

export default function GenPopup(type: Popups): ReactNode {
  switch (type) {
    case 'create':
      return <Create />;
    case 'aula':
      return <Aula />;
    case 'lembrete':
      return <Lembrete />;
    default:
      break;
  }
}
