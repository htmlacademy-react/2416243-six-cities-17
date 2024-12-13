import {ReviewForm} from '../review-form/review-form.tsx';
import {Review} from '../../types/reviews.ts';
import {ReviewItem} from '../review-item/review-item.tsx';

interface ReviewsProps {
  reviews: Review[];
}

export function Reviews({reviews}: Readonly<ReviewsProps>) {
  const reviewsCount = reviews.length;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewItem key={review.id} review={review}/>)}
      </ul>
      <ReviewForm/>
    </section>
  );
}
