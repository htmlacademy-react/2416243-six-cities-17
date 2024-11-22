import {Header} from '../../components/header/header.tsx';
import {LoginContainer} from '../../components/login-container/login-container.tsx';

export function LoginPage() {
  return (
    <div className="page page--gray page--login">
      <Header isNavHidden/>

      <main className="page__main page__main--login">
        <LoginContainer/>
      </main>
    </div>
  );
}
