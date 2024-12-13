import {OfferType} from '../../types/offer.ts';
import {CitiesCard} from '../cities-card/cities-card.tsx';
import {PlaceCardType} from '../../const.ts';

interface NearPlacesProps {
  offers: OfferType[];
  onOfferClick: (id: string) => void;
  onOfferHover: (offerItem?: OfferType) => void;
}

export function NearPlaces({offers, onOfferClick, onOfferHover}: Readonly<NearPlacesProps>) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <CitiesCard
            key={offer.id}
            offer={offer}
            cardType={PlaceCardType.Near}
            onOfferClick={onOfferClick}
            onOfferHover={onOfferHover}
          />)
        )}
      </div>
    </section>
  );
}
