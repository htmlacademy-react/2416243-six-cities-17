import {Link} from 'react-router';
import {AppRoute} from '../../const.ts';

interface HeaderProps {
  isNavHidden?: boolean;
}

export function Header({isNavHidden = false}: Readonly<HeaderProps>) {
  const isLoggedIn: boolean = true;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {!isNavHidden &&
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                isLoggedIn
                  ? (
                    <>
                      <li className="header__nav-item user">
                        <Link to={'#'} className="header__nav-link header__nav-link--profile">
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                          <span className="header__favorite-count">3</span>
                        </Link>
                      </li>
                      <li className="header__nav-item">
                        <Link to={'#'} className="header__nav-link">
                          <span className="header__signout">Sign out</span>
                        </Link>
                      </li>
                    </>) : (
                    <li className="header__nav-item user">
                      <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__login">Sign in</span>
                      </Link>
                    </li>
                  )
              }
            </ul>
          </nav>}
        </div>
      </div>
    </header>
  );
}
