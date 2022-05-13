import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import style from './HomePage.module.css';
import Video from '../../Components/Video/Video';
import { HOME_VIDEOS_REQUEST } from '../../redux/actionType';

const HomePage = () => {
  const dispatch = useDispatch();

  const { videos, loading } = useSelector(state => state.homeVideos);

  useEffect(() => {
    dispatch({ type: HOME_VIDEOS_REQUEST });
  }, [dispatch]);

  const fetchData = () => {
    dispatch({ type: HOME_VIDEOS_REQUEST });
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore
        loader={<h4>Loading...</h4>}
        className={style.container}
      >
        {!loading ? (
          videos.map(video => <Video video={video} key={video.id} />)
        ) : (
          <p>Loading...</p>
        )}
      </InfiniteScroll>
    </div>
  );
};

export default HomePage;
