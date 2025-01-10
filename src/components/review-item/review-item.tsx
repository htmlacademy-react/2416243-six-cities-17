import {Review} from '../../types/reviews.ts';
import {getStringDate} from '../../utlis/date.ts';
import {DateFormat, starLength} from '../../const.ts';

interface ReviewItemProps {
  review: Review;
}

export function ReviewItem({review}: Readonly<ReviewItemProps>) {
  const {date, user, comment, rating} = review;
  const {name, avatarUrl} = user;

  const reviewDate = getStringDate(date, DateFormat.DATE);
  const reviewDateText = getStringDate(date, DateFormat.MONTH_YEAR);
  const placeRating = `${Math.round(rating) * starLength}%`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54"
            alt={`${name} avatar`}
          />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: placeRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={reviewDate}>{reviewDateText}</time>
      </div>
    </li>
  );
}
