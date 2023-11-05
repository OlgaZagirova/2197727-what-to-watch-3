import { ReviewProps } from './props';
import Review from '../components/review';
import { FilmReviewsProps } from './props';

export default function FilmReviews({reviews}: FilmReviewsProps) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review: ReviewProps) => (
          <Review
            key={review.id}
            id={review.id}
            date={review.date}
            comment={review.comment}
            user={review.user}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
}
