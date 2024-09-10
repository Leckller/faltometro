import Logo from '../../assets/logo.png';
import { Nav, Options } from './Header/index';

function Header() {
  return (
    <header
      className="flex flex-row bg-white h-[10vh] p-2 pr-4 pl-4
       items-center justify-between"
    >
      <Nav />

      <section
        className="h-full w-[33%] flex flex-row items-center justify-center"
      >
        <button className="h-full">
          <img className="object-cover h-full" src={ Logo } alt="Logo" />
        </button>
      </section>

      <Options />
    </header>
  );
}

export default Header;
