import LogoIMG from '../../assets/logo.png';

function Logo() {
  return (
    <article
      className="flex w-full justify-center items-center h-full scale-95
    bg-[#E7FB01]"
    >
      <img src={ LogoIMG } alt="faltometro" />
    </article>
  );
}

export default Logo;
