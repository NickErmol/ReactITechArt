import { spawn } from 'redux-saga/effects';
import watchPopularVideos from './popularVideosSaga';
import watchRelatedVideos from './relatedVideosSaga';
import watchVideoById from './videoByIdSaga';
import watchVideosBySearch from './videosBySearchSaga';

export default function* rootSaga() {
  yield spawn(watchPopularVideos);
  yield spawn(watchVideoById);
  yield spawn(watchRelatedVideos);
  yield spawn(watchVideosBySearch);
}
