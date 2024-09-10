import { ReactNode } from 'react';
import Create from './Create';
import { Popups } from '../../types/Popup';

export default function GenPopup(type: Popups): ReactNode {
  switch (type) {
    case 'create':
      return <Create />;
    default:
      break;
  }
}
