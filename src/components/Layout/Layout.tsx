import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useAppSelector } from '../../hooks/reduxHooks';
import GenPopup from '../PopUp/GenPopup';

function Layout() {
  const { type, visible } = useAppSelector((s) => s.Popup);
  return (
    <>
      {visible && GenPopup(type)}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
