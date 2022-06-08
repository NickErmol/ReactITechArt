import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Video from '../../Components/Video/Video';
import { searchedVideo } from '../../redux/actions';
import {
  getSearchedVideos,
  getIsSearchedVideosLoading,
} from '../../redux/selectors';

import style from './SearchPage.module.css';

const SearchPage = () => {
  const { query } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchedVideo(query));
  }, [query, dispatch]);

  const videos = useSelector(getSearchedVideos);
  const loading = useSelector(getIsSearchedVideosLoading);

  const memoizedVideos = useMemo(() => videos.map((video: any) => <Video video={video} key={video.id.videoId} />), [videos]);
console.log(videos);
  return (
    <div className={style.container}>
      {!loading ? (
        // useMemo(() => videos.map((video: any) => <Video video={video} key={video.id.videoId} />), [videos])
        memoizedVideos
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchPage;
