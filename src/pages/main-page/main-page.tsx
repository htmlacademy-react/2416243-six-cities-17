import {CitiesPlacesList} from '../../components/cities-places-list/cities-places-list.tsx';
import {Map} from '../../components/map/map.tsx';
import {Header} from '../../components/header/header.tsx';
import {CitiesLocationList} from '../../components/cities-location-list/cities-location-list.tsx';
import {CityType, OfferClickType, OfferHoverType, OfferType} from '../../types/offer.ts';
import {AppRoute, PlaceCardType} from '../../const.ts';
import {useNavigate} from 'react-router';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Helmet} from 'react-helmet-async';
import {changeCity} from '../../store/city-slice/city-slice.ts';
import {resetSort} from '../../store/offers-slice/offers-slice.ts';
import {getOffers} from '../../store/offers-slice/selectors.ts';
import {getCurrentCity} from '../../store/city-slice/selectors.ts';
import {closeSort} from '../../store/sort-slice/sort-slice.ts';
import {CitiesPlacesListEmpty} from '../../components/cities-places-list/cities-places-list-empty.tsx';

interface MainPageProps {
  onOfferClick: OfferClickType;
  onOfferHover: OfferHoverType;
  activeCard: OfferType | undefined;
}

export function MainPage({onOfferClick, onOfferHover, activeCard}: Readonly<MainPageProps>) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const offers = useAppSelector(getOffers);
  const currentCity = useAppSelector(getCurrentCity);
  const offersInCurrentCity = offers.filter((offer) => offer.city.name === currentCity.name);

  const handleCitiesLocationClick = (city: CityType) => {
    dispatch(changeCity(city));
    dispatch(resetSort());
    dispatch(closeSort());
    navigate(AppRoute.Main);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesLocationList onCityLocationClick={handleCitiesLocationClick}/>
        <div className="cities">
          {
            offersInCurrentCity.length === 0
              ? <CitiesPlacesListEmpty city={currentCity}/>
              : (
                <div className="cities__places-container container">
                  <CitiesPlacesList
                    city={currentCity}
                    offers={offersInCurrentCity}
                    cardType={PlaceCardType.Main}
                    onOfferClick={onOfferClick}
                    onOfferHover={onOfferHover}
                  />
                  <div className="cities__right-section">
                    <section className="cities__map map">
                      <Map
                        city={currentCity}
                        offers={offersInCurrentCity}
                        activeCard={activeCard}
                      />
                    </section>
                  </div>
                </div>
              )
          }
        </div>
      </main>
    </div>
  );
}
