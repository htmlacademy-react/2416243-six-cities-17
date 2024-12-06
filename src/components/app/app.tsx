import {MainPage} from '../../pages/main-page/main-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {OfferType} from '../../types/offer.ts';
import {useState} from 'react';

interface AppProps {
  offers: OfferType[];
}

export function App({offers}: Readonly<AppProps>) {
  const [activeCard, setActiveCard] = useState({id: '0'});
  const handleOfferMouseOver = (id: string) => {
    setActiveCard({
      ...activeCard,
      id: id
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offers={offers} onOfferMouseOver={handleOfferMouseOver}/>}
        />

        <Route
          path={AppRoute.Offer}
        >
          <Route
            path={AppRoute.OfferId}
            element={<OfferPage offers={offers}/>}
          />
        </Route>

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage offers={offers} onOfferMouseOver={handleOfferMouseOver}/>
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />

        <Route
          path="*"
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
