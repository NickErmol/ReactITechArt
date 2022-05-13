/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import style from './video.module.css';
import request from '../../Api/api';

const Video = ({ video }) => {
  const {
    id,
    snippet: {
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;
  const videoId = id?.videoId || id;

  const [views, setViews] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request('/videos', {
        params: {
          part: 'contentDetails,statistics',
          id: videoId,
        },
      });
      setViews(items[0].statistics.viewCount);
    };
    getVideoDetails();
  }, [videoId]);

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
          <span>{views} - Views </span>
          <span> || Published - {moment(publishedAt).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default Video;

Video.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    snippet: PropTypes.shape({
      title: PropTypes.string,
      publishedAt: PropTypes.string,
      thumbnails: PropTypes.shape({
        medium: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};
