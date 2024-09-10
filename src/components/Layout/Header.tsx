import { IoMenu } from 'react-icons/io5';
import { MdLibraryAdd } from 'react-icons/md';
import Logo from '../../assets/logo.png';

function Header() {
  return (
    <header
      className="flex flex-row bg-white h-[10vh] p-2 pr-4 pl-4
       items-center justify-between"
    >
      <button
        className="md:hidden
        h-full w-[33%] flex flex-row items-center justify-start"
      >
        <IoMenu className="object-cover h-full w-6" />
      </button>
      <nav
        className="hidden md:flex justify-around
        h-full w-[33%] flex-row items-center font-semibold"
      >
        <a href="a">Perfil</a>
        <a href="a">Matérias</a>
        <a href="a">Lembretes</a>
      </nav>
      <button className="h-full w-[33%] flex flex-row items-center justify-center">
        <img className="object-cover h-full" src={ Logo } alt="Logo" />
      </button>
      <button className="h-full w-[33%] flex flex-row items-center justify-end">
        <MdLibraryAdd className="object-cover h-full w-6" />
      </button>
    </header>
  );
}

export default Header;
