import {Header} from '../../components/header/header.tsx';
import {LoginContainer} from '../../components/login-container/login-container.tsx';
import {Helmet} from 'react-helmet-async';

export function LoginPage() {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <Header isNavHidden/>

      <main className="page__main page__main--login">
        <LoginContainer/>
      </main>
    </div>
  );
}
