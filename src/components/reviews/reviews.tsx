import {ReviewForm} from '../review-form/review-form.tsx';
import {ReviewItem} from '../review-item/review-item.tsx';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const.ts';

export function Reviews() {
  const currentOfferReviews = useAppSelector((state) => state.comments);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{currentOfferReviews.length}</span></h2>
      <ul className="reviews__list">
        {currentOfferReviews.length
          ? currentOfferReviews.map((review) => <ReviewItem key={review.id} review={review}/>)
          : ''}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth ? <ReviewForm/> : ''}
    </section>
  );
}
