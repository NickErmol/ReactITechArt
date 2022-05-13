import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Video from '../../Components/Video/Video';
import { SEARCHED_VIDEO_REQUEST } from '../../redux/actionType';
import style from './SearchPage.module.css';

const SearchPage = () => {
  const { query } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SEARCHED_VIDEO_REQUEST, payload: query });
  }, [query, dispatch]);

  const { videos, loading } = useSelector(state => state.searchedVideos);

  return (
    <div className={style.container}>
      {!loading ? (
        videos?.map(video => <Video video={video} key={video.id.videoId} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchPage;
