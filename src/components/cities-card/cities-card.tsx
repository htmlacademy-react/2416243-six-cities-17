import {OfferType} from '../../types/offer.ts';
import {AppRoute, PlaceCardType, starLength} from '../../const.ts';
import {Link} from 'react-router';

interface CitiesCardProps {
  offer: OfferType;
  cardType: PlaceCardType;
  onOfferClick: (id: string) => void;
  onOfferHover: (offerItem?: OfferType) => void;
}

export function CitiesCard({offer, cardType, onOfferClick, onOfferHover}: Readonly<CitiesCardProps>) {
  const {id, title, price, type, previewImage, isPremium, isFavorite, rating} = offer;
  const bookmarkButtonClass = isFavorite
    ? 'place-card__bookmark-button button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';
  const placeRating = `${rating * starLength}%`;
  let articleClass = '';
  let infoDivClass = '';
  let imageWrapper = '';
  let cardImageWidth = 260;
  let cardImageHeight = 200;

  switch (cardType) {
    case PlaceCardType.Main:
      articleClass = 'cities__card';
      imageWrapper = 'cities__image-wrapper';
      break;
    case PlaceCardType.Favorites:
      articleClass = 'favorites__card';
      infoDivClass = 'favorites__card-info';
      imageWrapper = 'favorites__image-wrapper';
      cardImageWidth = 150;
      cardImageHeight = 110;
      break;
    case PlaceCardType.Near:
      articleClass = 'near-places__card';
      imageWrapper = 'near-places__image-wrapper';
      break;
  }

  return (
    <article
      className={`${articleClass} place-card`}
      id={`offer-${id}`}
      onClick={() => onOfferClick(id)}
      onMouseEnter={() => onOfferHover(offer)}
      onFocus={() => onOfferHover(offer)}
    >
      {isPremium
        ? <div className="place-card__mark"><span>Premium</span></div>
        : ''}
      <div className={`${imageWrapper} place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={cardImageWidth}
            height={cardImageHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${infoDivClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkButtonClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: placeRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</Link>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}</p>
      </div>
    </article>
  );
}
