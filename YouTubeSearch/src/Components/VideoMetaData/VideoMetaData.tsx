import React, { useEffect } from 'react';
import ShowMoreText from 'react-show-more-text';
import transformPublishedAtTime from '../../utils/transformPublishedAtTime';

interface Props {
  video:{
    snippet: {
            title: string,
            publishedAt: string,
            description: string,
          },
    statistics: {
      viewCount: string,
      likeCount: string,
    }
  }
}

const VideoMetaData: React.FC<Props> = ({ video: { snippet, statistics } }) => {
  const { title, publishedAt, description } = snippet;
  const { viewCount, likeCount } = statistics;

  return (
    <div>
      <div>
        <h5>{title}</h5>
        <div>
          <span>
            <span>{viewCount} - Views </span>
            <span> || Published - {transformPublishedAtTime(publishedAt)}</span>
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
