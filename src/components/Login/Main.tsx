import Form from './Form';
import Logo from './Logo';
import OtherOptionsToLogin from './OtherOptionsToLogin';

function Main() {
  return (
    <main className="h-screen flex flex-col justify-around items-center bg-[#E7FB01]">
      <Logo />
      <section
        className="h-full rounded-t-3xl w-full bg-white p-5
        lg:w-[1000px]"
      >
        <Form />
        <OtherOptionsToLogin />
      </section>
    </main>
  );
}

export default Main;
