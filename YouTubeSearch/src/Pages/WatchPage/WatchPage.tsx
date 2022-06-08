import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Video from '../../Components/Video/Video';
import VideoMetaData from '../../Components/VideoMetaData/VideoMetaData';
import { relatedVideo, selectedVideo } from '../../redux/actions';
import {
  getRelatedVideos,
  getSelectedVideo,
  getIsSelectedVideosLoading,
} from '../../redux/selectors';

import style from './WatchPage.module.css';

const WatchPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectedVideo(id));
    dispatch(relatedVideo(id));
  }, [dispatch, id]);

  const videos = useSelector(getRelatedVideos);

  const video = useSelector(getSelectedVideo);
  const loading = useSelector(getIsSelectedVideosLoading);

  const memoizedVideos = useMemo(() => videos
  ?.filter((filteredVideo: any) => filteredVideo.snippet)
  .map((videoItem: any) => (
    <Video video={videoItem} key={videoItem.id.videoId} />
  )), [videos]);

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
         memoizedVideos
        ) : (
          <h6>Loading...</h6>
        )}
      </div>
    </div>
  );
};

export default WatchPage;
