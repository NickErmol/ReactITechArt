import React from 'react';
import moment from 'moment';
import ShowMoreText from 'react-show-more-text';
import PropTypes from 'prop-types';

const VideoMetaData = ({ video: { snippet, statistics } }) => {
  const { title, publishedAt, description } = snippet;
  const { viewCount, likeCount } = statistics;

  return (
    <div>
      <div>
        <h5>{title}</h5>
        <div>
          <span>
            <span>{viewCount} - Views </span>
            <span> || Published - {moment(publishedAt).fromNow()}</span>
          </span>
          <div>
            <span>likes - {likeCount}</span>
          </div>
        </div>
      </div>
      <div>
        <ShowMoreText
          lines={1}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;

VideoMetaData.propTypes = {
  video: PropTypes.shape({
    snippet: PropTypes.shape({
      title: PropTypes.string,
      publishedAt: PropTypes.string,
      description: PropTypes.string,
    }),
    statistics: PropTypes.shape({
      viewCount: PropTypes.string,
      likeCount: PropTypes.string,
    }),
  }).isRequired,
};
