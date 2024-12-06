import {CitiesPlacesList} from '../../components/cities-places-list/cities-places-list.tsx';
import {CitiesMap} from '../../components/cities-map/cities-map.tsx';
import {Header} from '../../components/header/header.tsx';
import {CitiesLocationList} from '../../components/cities-location-list/cities-location-list.tsx';
import {OfferType} from '../../types/offer.ts';
import {PlaceCardType} from '../../const.ts';

interface MainPageProps {
  offers: OfferType[];
  offerMouseOverHandler: (id: string) => void;
}

export function MainPage({offers, offerMouseOverHandler}: Readonly<MainPageProps>) {
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
              offerMouseOverHandler={offerMouseOverHandler}
            />
            <div className="cities__right-section">
              <CitiesMap/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
