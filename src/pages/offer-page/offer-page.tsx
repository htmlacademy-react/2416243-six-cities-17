import {Header} from '../../components/header/header.tsx';
import {Map} from '../../components/map/map.tsx';
import {NearPlaces} from '../../components/near-places/near-places.tsx';
import {OfferGallery} from '../../components/offer-gallery/offer-gallery.tsx';
import {OfferDetails} from '../../components/offer-details/offer-details.tsx';
import {OfferClickType, OfferHoverType, OfferType} from '../../types/offer.ts';
import {useParams} from 'react-router';
import {cityRef} from '../../const.ts';
import {reviews} from '../../mocks/reviews.ts';
import {useAppSelector} from '../../hooks';

interface OfferPageProps {
  onOfferClick: OfferClickType;
  onOfferHover: OfferHoverType;
  activeCard: OfferType | undefined;
}

export function OfferPage({onOfferClick, onOfferHover, activeCard}: Readonly<OfferPageProps>) {
  const {id} = useParams();

  const offers = useAppSelector((state) => state.offers);
  const currentOffer = useAppSelector((state) => state.currentOffer);
  const offer = offers.find((element) => element.id === id) as OfferType;
  const nearOffers = offers.filter((element) => element.id !== offer?.id).slice(0, 3);

  if (currentOffer) {

    return (
      <div className="page">
        <Header/>

        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <OfferGallery images={currentOffer.images}/>
            </div>
            <div className="offer__container container">
              <OfferDetails currentOffer={currentOffer} reviews={reviews}/>
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
}
