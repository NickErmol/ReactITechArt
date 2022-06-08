/* eslint-disable no-console */
import { call, put, select, takeEvery } from 'redux-saga/effects';
import request from '../../Api/api';
import { getNextPageToken } from '../selectors';

import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from '../actionType';

function* getPopularVideos() {
  try {
    const nextPageToken: ReturnType<typeof getNextPageToken> = yield select(getNextPageToken);

    const { data } = yield call(request, '/videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode: 'Ru',
        maxResults: 20,
        pageToken: nextPageToken,
      },
    });
    console.log(data);
    yield put({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error: any) {
    yield put({ type: HOME_VIDEOS_FAIL, payload: error.message });
  }
}

export default function* watchPopularVideos() {
  yield takeEvery(HOME_VIDEOS_REQUEST, getPopularVideos);
}
