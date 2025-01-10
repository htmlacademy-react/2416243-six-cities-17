import {Reviews} from '../reviews/reviews.tsx';
import {starLength} from '../../const.ts';
import {CurrentOfferType} from '../../types/offer.ts';

interface OfferDetailsProps {
  currentOffer: CurrentOfferType;
}

export function OfferDetails({currentOffer}: Readonly<OfferDetailsProps>) {
  const {
    id,
    title,
    type,
    price,
    isFavorite,
    isPremium,
    rating,
    description,
    goods,
    host,
    maxAdults,
    bedrooms,
  } = currentOffer;

  const bookmarkButtonClass = isFavorite
    ? 'place-card__bookmark-button button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';
  const placeRating = `${Math.round(rating) * starLength}%`;
  const placeType = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  const placeHostName = host.name.charAt(0).toUpperCase() + host.name.slice(1).toLowerCase();
  const placeBedrooms = bedrooms > 1 ? `${bedrooms} Bedrooms` : `${bedrooms} Bedroom`;
  const placeMaxAdults = maxAdults > 1 ? `${maxAdults} adults` : `${maxAdults} adult`;

  return (
    <div className="offer__wrapper">
      {isPremium ? <div className="offer__mark"><span>Premium</span></div> : ''}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {title}
        </h1>
        <button className={bookmarkButtonClass} type="button">
          <svg className="offer__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
        </button>
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{width: placeRating}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{Math.round(rating)}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {placeType}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {placeBedrooms}
        </li>
        <li className="offer__feature offer__feature--adults">
          Max {placeMaxAdults}
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">&euro;{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        <ul className="offer__inside-list">
          {goods.map((good) => (
            <li className="offer__inside-item" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
      <div className="offer__host">
        <h2 className="offer__host-title">Meet the host</h2>
        <div className="offer__host-user user">
          <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
            <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74"
              alt="Host avatar"
            />
          </div>
          <span className="offer__user-name">
            {placeHostName}
          </span>
          {host.isPro
            ? (
              <span className="offer__user-status">
                Pro
              </span>
            )
            : ''}
        </div>
        <div className="offer__description">
          <p className="offer__text">
            {description}
          </p>
        </div>
      </div>
      <Reviews offerId={id}/>
    </div>
  );
}
