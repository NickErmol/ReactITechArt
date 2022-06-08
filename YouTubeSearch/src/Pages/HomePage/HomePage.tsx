/* eslint-disable no-console */
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Video from '../../Components/Video/Video';
import { homeVideo } from '../../redux/actions';
import { getHomeVideos, getIsHomeVideosLoading } from '../../redux/selectors';

import style from './HomePage.module.css';

const HomePage = () => {
  const dispatch = useDispatch();

  const videos = useSelector(getHomeVideos);
  const loading = useSelector(getIsHomeVideosLoading);
  console.log(videos);
  useEffect(() => {
    dispatch(homeVideo());
  }, [dispatch]);

  const fetchData = () => {
    dispatch(homeVideo());
  };

  const memoizedVideos = useMemo(() => videos.map((video: any) => <Video video={video} key={video.id} />), [videos]);

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
          memoizedVideos
        ) : (
          <p>Loading...</p>
        )}
      </InfiniteScroll>
    </div>
  );
};

export default HomePage;
