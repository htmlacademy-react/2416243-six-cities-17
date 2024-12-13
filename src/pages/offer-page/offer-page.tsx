import {Header} from '../../components/header/header.tsx';
import {Map} from '../../components/map/map.tsx';
import {NearPlaces} from '../../components/near-places/near-places.tsx';
import {OfferGallery} from '../../components/offer-gallery/offer-gallery.tsx';
import {OfferDetails} from '../../components/offer-details/offer-details.tsx';
import {OfferType} from '../../types/offer.ts';
import {useParams} from 'react-router';
import {cityRef} from '../../const.ts';
import {reviews} from '../../mocks/reviews.ts';

interface OfferPageProps {
  offers: OfferType[];
  onOfferClick: (id: string) => void;
  onOfferHover: (offerItem?: OfferType) => void;
  activeCard: OfferType | undefined;
}

export function OfferPage({offers, onOfferClick, onOfferHover, activeCard}: Readonly<OfferPageProps>) {
  const {id} = useParams();
  const offer = offers.find((element) => element.id === id) as OfferType;
  const nearOffers = offers.filter((element) => element.id !== offer?.id).slice(0, 3);

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery/>
          </div>
          <div className="offer__container container">
            <OfferDetails offer={offer} reviews={reviews}/>
          </div>
          <section className="offer__map map">
            <Map city={cityRef} offers={nearOffers} activeCard={activeCard}/>
          </section>
        </section>
        <div className="container">
          <NearPlaces offers={nearOffers} onOfferClick={onOfferClick} onOfferHover={onOfferHover}/>
        </div>
      </main>
    </div>
  );
}
