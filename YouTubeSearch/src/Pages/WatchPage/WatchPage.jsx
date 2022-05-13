import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Video from '../../Components/Video/Video';
import VideoMetaData from '../../Components/VideoMetaData/VideoMetaData';
import {
  SELECTED_VIDEO_REQUEST,
  RELATED_VIDEO_REQUEST,
} from '../../redux/actionType';
import style from './WatchPage.module.css';

const WatchPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SELECTED_VIDEO_REQUEST, payload: id });
    dispatch({ type: RELATED_VIDEO_REQUEST, payload: id });
  }, [dispatch, id]);

  const { videos } = useSelector(state => state.relatedVideos);

  const { video, loading } = useSelector(state => state.selectedVideo);

  return (
    <div className={style.container}>
      <div className={style.playerContainer}>
        <div className={style.player}>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          />
        </div>
        {!loading ? <VideoMetaData video={video} /> : <h6>Loading...</h6>}
      </div>
      <div className={style.videoList}>
        {!loading ? (
          videos
            ?.filter(videoItem => videoItem.snippet)
            .map(videoItem => (
              <Video video={videoItem} key={videoItem.id.videoId} />
            ))
        ) : (
          <h6>Loading...</h6>
        )}
      </div>
    </div>
  );
};

export default WatchPage;
