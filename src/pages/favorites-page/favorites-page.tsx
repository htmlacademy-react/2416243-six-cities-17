import {Header} from '../../components/header/header.tsx';
import {Footer} from '../../components/footer/footer.tsx';
import {OfferClickType, OfferHoverType} from '../../types/offer.ts';
import {CitiesCard} from '../../components/cities-card/cities-card.tsx';
import {Cities, PlaceCardType} from '../../const.ts';
import {useAppSelector} from '../../hooks';
import {FavoritesEmptyList} from '../../components/favorites-empty-list/favorites-empty-list.tsx';

interface FavoritesPageProps {
  onOfferClick: OfferClickType;
  onOfferHover: OfferHoverType;
}

export function FavoritesPage({onOfferClick, onOfferHover}: Readonly<FavoritesPageProps>) {
  const favoriteOffers = useAppSelector((state) => state.favoriteOffers);

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {
            favoriteOffers.length !== 0
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
