import { IoMenu } from 'react-icons/io5';

function Nav() {
  return (
    <>
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
    </>
  );
}

export default Nav;
