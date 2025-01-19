import {OfferClickType, OfferHoverType, OfferType} from '../../types/offer.ts';
import {AppRoute, AuthorizationStatus, PlaceCardType, starLength} from '../../const.ts';
import {Link, useNavigate} from 'react-router';
import {updateOfferFavoriteStatusAction} from '../../store/data-api-actions.ts';
import {citiesCardSettings} from './cities-card-settings.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';

interface CitiesCardProps {
  offer: OfferType;
  cardType: PlaceCardType;
  onOfferClick: OfferClickType;
  onOfferHover: OfferHoverType;
}

export function CitiesCard({offer, cardType, onOfferClick, onOfferHover}: Readonly<CitiesCardProps>) {
  const {id, title, price, type, previewImage, isPremium, isFavorite, rating} = offer;
  const bookmarkButtonClass = isFavorite
    ? 'place-card__bookmark-button button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';
  const placeRating = `${Math.round(rating) * starLength}%`;
  const placeName = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  const placeType = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

  const {
    articleClass,
    infoDivClass,
    imageWrapper,
    cardImageWidth,
    cardImageHeight
  } = citiesCardSettings(cardType);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthorized = useAppSelector((state) => state.authorizationStatus) === AuthorizationStatus.Auth;

  const handleFavoriteButtonClick = () => {
    if (!isAuthorized) {
      navigate(AppRoute.Login);
    } else {
      dispatch(updateOfferFavoriteStatusAction(offer));
    }
  };

  return (
    <article
      className={`${articleClass} place-card`}
      id={`offer-${id}`}
      onClick={() => onOfferClick(offer)}
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
          <button
            className={bookmarkButtonClass}
            type="button"
            onClick={handleFavoriteButtonClick}
          >
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
          <Link to={`${AppRoute.Offer}/${id}`}>{placeName}</Link>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>
  );
}
