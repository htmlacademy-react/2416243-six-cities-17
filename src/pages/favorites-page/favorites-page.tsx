import {Header} from '../../components/header/header.tsx';
import {Footer} from '../../components/footer/footer.tsx';
import {OfferClickType, OfferHoverType} from '../../types/offer.ts';
import {CitiesCard} from '../../components/cities-card/cities-card.tsx';
import {Cities, PlaceCardType} from '../../const.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {FavoritesEmptyList} from '../../components/favorites-empty-list/favorites-empty-list.tsx';
import {Helmet} from 'react-helmet-async';
import {getFavoriteOffers} from '../../store/offers-slice/selectors.ts';
import {useEffect} from 'react';
import {fetchFavoriteOffersAction} from '../../store/data-api-actions.ts';

interface FavoritesPageProps {
  onOfferClick: OfferClickType;
  onOfferHover: OfferHoverType;
}

export function FavoritesPage({onOfferClick, onOfferHover}: Readonly<FavoritesPageProps>) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isFavoriteOffersEmpty = favoriteOffers.length === 0;

  return (
    <div className={`page ${isFavoriteOffersEmpty ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header/>

      <main className={`page__main page__main--favorites ${isFavoriteOffersEmpty ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          {
            !isFavoriteOffersEmpty
              ? (
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">
                    {
                      Object.values(Cities).map((city) => {
                        const favoriteOffersByCity = favoriteOffers.filter((offer) => offer.city.name === city.name);

                        if (favoriteOffersByCity.length) {
                          return (
                            <li className="favorites__locations-items" key={city.name}>
                              <div className="favorites__locations locations locations--current">
                                <div className="locations__item">
                                  <a className="locations__item-link" href="#">
                                    <span>{city.name}</span>
                                  </a>
                                </div>
                              </div>
                              <div className="favorites__places">
                                {favoriteOffersByCity.map((offer) => (
                                  <CitiesCard
                                    key={offer.id}
                                    offer={offer}
                                    cardType={PlaceCardType.Favorites}
                                    onOfferClick={onOfferClick}
                                    onOfferHover={onOfferHover}
                                  />
                                ))}
                              </div>
                            </li>
                          );
                        }
                      })
                    }
                  </ul>
                </section>
              )
              : <FavoritesEmptyList/>
          }
        </div>
      </main>
      <Footer/>
    </div>
  );
}
