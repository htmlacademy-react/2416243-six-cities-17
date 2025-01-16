import {Header} from '../../components/header/header.tsx';
import './not-found-page.css';
import {Link} from 'react-router';
import {AppRoute} from '../../const.ts';
import {Helmet} from 'react-helmet-async';

export function NotFoundPage() {
  return (
    <div className="page--gray page--error">
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <Header/>

      <main className="page__error">
        <div className="container error__container">
          <h1>4<span>0</span>4</h1>
          <p>It looks like you&#39;re lost...</p>
          <Link to={AppRoute.Main}>Home page</Link>
        </div>
      </main>

    </div>
  );
}
