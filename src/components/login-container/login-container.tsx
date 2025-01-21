import {FormEvent} from 'react';
import { useAppDispatch } from '../../hooks';
import {loginAction} from '../../store/user-api-actions.ts';
import {AppRoute, Cities} from '../../const.ts';
import {Link} from 'react-router';
import {changeCity} from '../../store/city-slice/city-slice.ts';

export function LoginContainer() {
  const dispatch = useAppDispatch();
  const randomCity = Object.values(Cities)[Math.floor(Math.random() * Object.entries(Cities).length)];

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (email && password) {
      dispatch(loginAction({ email, password }));
    }
  };

  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form className="login__form form" action="#" method="post" onSubmit={handleSubmitForm}>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input className="login__input form__input" type="email" name="email" placeholder="Email" required/>
          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input className="login__input form__input" type="password" name="password" placeholder="Password" required/>
          </div>
          <button className="login__submit form__submit button" type="submit">Sign in</button>
        </form>
      </section>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main} onClick={() => {
            dispatch(changeCity(randomCity));
          }}
          >
            <span>{randomCity.name}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
