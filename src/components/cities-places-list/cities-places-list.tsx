import {CitiesCard} from '../cities-card/cities-card.tsx';
import {CityType, OfferClickType, OfferHoverType, OfferType} from '../../types/offer.ts';
import {PlaceCardType} from '../../const.ts';
import {PlacesSorting} from '../places-sorting/places-sorting.tsx';

interface CitiesPlacesListProps {
  offers: OfferType[];
  cardType: PlaceCardType;
  onOfferClick: OfferClickType;
  onOfferHover: OfferHoverType;
  city: CityType;
}

export function CitiesPlacesList({
  offers,
  cardType,
  onOfferClick,
  onOfferHover,
  city
}: Readonly<CitiesPlacesListProps>) {

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} {offers.length > 1 ? 'places' : 'place'} to stay in {city.name}</b>
      <PlacesSorting/>
      <div className="cities__places-list places__list tabs__content" onMouseLeave={() => onOfferHover()}>
        {offers.map((offer) => (
          <CitiesCard
            key={offer.id}
            offer={offer}
            cardType={cardType}
            onOfferClick={onOfferClick}
            onOfferHover={onOfferHover}
          />)
        )}
      </div>
    </section>
  );
}
