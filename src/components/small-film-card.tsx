import { SmallFilmCardProps } from '../components/props';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import VideoPlayer from './video-player';

export default function SmallFilmCard({id, previewImage, name, previewVideoLink, isPlayingPreviewVideo, onSmallFilmCardMouseOver, onSmallFilmCardMouseOut}: SmallFilmCardProps) {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={onSmallFilmCardMouseOver} onMouseOut={onSmallFilmCardMouseOut}>
      <Link className="small-film-card__link" to={`${AppRoute.FilmData}/${id}`}>
        <div className="small-film-card__image">
          <VideoPlayer
            isPlaying={isPlayingPreviewVideo}
            src={previewVideoLink}
            poster={previewImage}
          />
        </div>
        <h3 className="small-film-card__title">
          {name}
        </h3>
      </Link>
    </article>
  );
}
