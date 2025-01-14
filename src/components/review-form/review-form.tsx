import {ChangeEvent, FormEvent, Fragment, useState} from 'react';
import {Rating, ReviewCommentLengthLimit} from '../../const.ts';
import {useAppDispatch} from '../../hooks';
import {postReviewCommentAction} from '../../store/data-api-actions.ts';

interface ReviewFormProps {
  offerId: string;
}

export function ReviewForm({offerId}: Readonly<ReviewFormProps>) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleReviewFormClear = () => {
    setComment('');
    setRating(0);
  };

  const handleReviewFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postReviewCommentAction({offerId, rating, comment}))
      .then(() => {
        handleReviewFormClear();
      });
  };

  const isValid =
    comment.length >= ReviewCommentLengthLimit.Min &&
    comment.length <= ReviewCommentLengthLimit.Max &&
    rating;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleReviewFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.keys(Rating).map((ratingKey) => (
          <Fragment key={ratingKey}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={Rating[ratingKey]}
              id={`${Rating[ratingKey]}-stars`}
              type="radio"
              onChange={handleRatingChange}
              checked={Rating[ratingKey] === rating}
            />
            <label
              htmlFor={`${Rating[ratingKey]}-stars`}
              className="reviews__rating-label form__rating-label"
              title={ratingKey}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange}
        value={comment}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least
          <b className="reviews__text-amount">{ReviewCommentLengthLimit.Min} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
}
