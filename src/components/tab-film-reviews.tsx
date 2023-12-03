import { ReviewData, FilmReviewsProps } from './props';
import Review from '../components/review';

export default function FilmReviews({filmId, reviews}: FilmReviewsProps) {
  const reviewsFilm = reviews.filter((review) => review.filmId === filmId);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewsFilm.map((review: ReviewData) => (
          <Review
            key={review.id}
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
