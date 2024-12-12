import {CitiesPlacesList} from '../../components/cities-places-list/cities-places-list.tsx';
import {Map} from '../../components/map/map.tsx';
import {Header} from '../../components/header/header.tsx';
import {CitiesLocationList} from '../../components/cities-location-list/cities-location-list.tsx';
import {CityType, OfferType} from '../../types/offer.ts';
import {PlaceCardType} from '../../const.ts';

interface MainPageProps {
  offers: OfferType[];
  onOfferClick: (id: string) => void;
  onOfferHover: (offerItem?: OfferType) => void;
  activeCard: OfferType | undefined;
}

export function MainPage({offers, onOfferClick, onOfferHover, activeCard}: Readonly<MainPageProps>) {
  const cityRef: CityType = {
    name: 'Amsterdam',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.85309666406198,
      zoom: 14
    }
  };

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesLocationList/>
        <div className="cities">
          <div className="cities__places-container container">
            <CitiesPlacesList
              offers={offers}
              cardType={PlaceCardType.Main}
              onOfferClick={onOfferClick}
              onOfferHover={onOfferHover}
            />
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={cityRef} offers={offers} activeCard={activeCard}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
