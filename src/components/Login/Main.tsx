import Form from './Form';
import Logo from './Logo';
import OtherOptionsToLogin from './OtherOptionsToLogin';

function Main() {
  return (
    <main className="h-screen flex flex-col justify-around">
      <Logo />
      <section className="h-full rounded-t-3xl -translate-y-4 w-full bg-white">
        <Form />
        <OtherOptionsToLogin />
      </section>
    </main>
  );
}

export default Main;
