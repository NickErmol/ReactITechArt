/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import style from './video.module.css';
import transformPublishedAtTime from '../../utils/transformPublishedAtTime';

interface Props {
  video: any
}

const Video: React.FC<Props> = ({ video }) => {
  const {
    id,
    snippet: {
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;
  console.log(video);
  const videoId = id?.videoId || id;

  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/watch/${videoId}`);
  };

  return (
    <div className={style.video} onClick={handleVideoClick}>
      <div>
        <LazyLoadImage src={medium.url} effect="blur" />
      </div>
      <div className={style.discription}>
        <p>{title}</p>
        <div>
          {/* <span>{views} - Views </span> */}
          <span> Published - {transformPublishedAtTime(publishedAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default Video;

// Video.propTypes = {
//   video: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//     snippet: PropTypes.shape({
//       title: PropTypes.string,
//       publishedAt: PropTypes.string,
//       thumbnails: PropTypes.shape({
//         medium: PropTypes.shape({
//           url: PropTypes.string,
//         }),
//       }),
//     }),
//     statistics: PropTypes.shape({
//       viewCount: PropTypes.string,
//     }),
//   }).isRequired,
// };
