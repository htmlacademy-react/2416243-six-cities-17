import {Reviews} from '../reviews/reviews.tsx';
import {CurrentOfferType} from '../../types/offer.ts';
import {capitalizeFirstLetter, formatStarRating} from '../../utlis/common.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useNavigate} from 'react-router';
import {getAuthorizationStatus} from '../../store/user-slice/selectors.ts';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {fetchOffersAction, updateOfferFavoriteStatusAction} from '../../store/data-api-actions.ts';
import {useState} from 'react';

interface OfferDetailsProps {
  currentOffer: CurrentOfferType;
}

export function OfferDetails({currentOffer}: Readonly<OfferDetailsProps>) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthorized = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

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
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const bookmarkButtonActiveClass = isFavorite
    ? 'place-card__bookmark-button--active'
    : '';
  const offerAvatarWrapperProClass = host.isPro
    ? 'offer__avatar-wrapper--pro'
    : '';
  const placeBedrooms = bedrooms > 1 ? `${bedrooms} Bedrooms` : `${bedrooms} Bedroom`;

  const placeMaxAdults = maxAdults > 1 ? `${maxAdults} adults` : `${maxAdults} adult`;

  const handleFavoriteButtonClick = () => {
    if (!isAuthorized) {
      navigate(AppRoute.Login);
      return;
    }

    try {
      setIsUpdating(true);
      dispatch(updateOfferFavoriteStatusAction(currentOffer))
        .then(() => dispatch(fetchOffersAction()));

    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="offer__wrapper">
      {isPremium ? <div className="offer__mark"><span>Premium</span></div> : ''}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {title}
        </h1>
        <button className={`place-card__bookmark-button button ${bookmarkButtonActiveClass}`} type="button" onClick={handleFavoriteButtonClick} disabled={isUpdating}>
          <svg className="offer__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
        </button>
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{width: formatStarRating(rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {capitalizeFirstLetter(type)}
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
          <div className={`offer__avatar-wrapper user__avatar-wrapper ${offerAvatarWrapperProClass}`}>
            <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74"
              alt="Host avatar"
            />
          </div>
          <span className="offer__user-name">
            {capitalizeFirstLetter(host.name)}
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
