import {ReviewForm} from '../review-form/review-form.tsx';
import {ReviewItem} from '../review-item/review-item.tsx';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus, MAX_REVIEW_SHOWN} from '../../const.ts';
import {Review} from '../../types/reviews.ts';
import {compareStringDates} from '../../utlis/date.ts';

interface ReviewsProps {
  offerId: string;
}

export function Reviews({offerId}: Readonly<ReviewsProps>) {
  const currentOfferReviews = useAppSelector((state) => state.comments);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const shownCurrentOfferReviews = [...currentOfferReviews]
    .sort((firstReview: Review, secondReview: Review) => compareStringDates(firstReview.date, secondReview.date))
    .slice(0, MAX_REVIEW_SHOWN);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{currentOfferReviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {currentOfferReviews.length
          ? shownCurrentOfferReviews.map((review) => <ReviewItem key={review.id} review={review}/>)
          : ''}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth ? <ReviewForm offerId={offerId}/> : ''}
    </section>
  );
}
