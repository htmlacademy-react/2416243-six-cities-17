import {CitiesPlacesList} from '../../components/cities-places-list/cities-places-list.tsx';
import {Map} from '../../components/map/map.tsx';
import {Header} from '../../components/header/header.tsx';
import {CitiesLocationList} from '../../components/cities-location-list/cities-location-list.tsx';
import {CityType, OfferType} from '../../types/offer.ts';
import {AppRoute, PlaceCardType} from '../../const.ts';
import {store} from '../../store';
import {changeCity} from '../../store/action.ts';
import {useNavigate} from 'react-router';
import {useAppDispatch} from '../../hooks';

interface MainPageProps {
  offers: OfferType[];
  onOfferClick: (id: string) => void;
  onOfferHover: (offerItem?: OfferType) => void;
  activeCard: OfferType | undefined;
}

export function MainPage({offers, onOfferClick, onOfferHover, activeCard}: Readonly<MainPageProps>) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const currentCity = store.getState().city;
  const offersInCurrentCity = offers.filter((offer) => offer.city.name === currentCity.name);

  const handleCitiesLocationClick = (city: CityType) => {
    dispatch(changeCity(city));
    navigate(AppRoute.Main);
  };

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesLocationList onCityLocationClick={handleCitiesLocationClick}/>
        <div className="cities">
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
        </div>
      </main>
    </div>
  );
}
