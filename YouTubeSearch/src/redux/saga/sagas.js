/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import { call, put, select, takeEvery, spawn } from 'redux-saga/effects';
import request from '../../Api/api';

import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  RELATED_VIDEO_FAIL,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
  SEARCHED_VIDEO_FAIL,
  SEARCHED_VIDEO_REQUEST,
  SEARCHED_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
} from '../actionType';

const getNextPageToken = state => state.homeVideos.nextPageToken;

function* getPopularVideos() {
  try {
    const nextPageToken = yield select(getNextPageToken);

    const { data } = yield call(request, '/videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode: 'Ru',
        maxResults: 20,
        pageToken: nextPageToken,
      },
    });

    yield put({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    yield put({ type: HOME_VIDEOS_FAIL, payload: error.message });
  }
}

function* watchPopularVideos() {
  yield takeEvery(HOME_VIDEOS_REQUEST, getPopularVideos);
}

function* getVideoById(id) {
  try {
    const { data } = yield call(request, '/videos', {
      params: {
        part: 'snippet,statistics',
        id: id.payload,
      },
    });
    yield put({
      type: SELECTED_VIDEO_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    yield put({ type: SELECTED_VIDEO_FAIL, payload: error.message });
  }
}

function* watchVideoById() {
  yield takeEvery(SELECTED_VIDEO_REQUEST, getVideoById);
}

function* getRelatedVideos(id) {
  try {
    const { data } = yield call(request, '/search', {
      params: {
        part: 'snippet',
        relatedToVideoId: id.payload,
        maxResults: 15,
        type: 'video',
      },
    });
    yield put({
      type: RELATED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    yield put({
      type: RELATED_VIDEO_FAIL,
      payload: error.response.data.message,
    });
  }
}

function* watchRelatedVideos() {
  yield takeEvery(RELATED_VIDEO_REQUEST, getRelatedVideos);
}

function* getVideosBySearch(keyword) {
  try {
    const { data } = yield call(request, '/search', {
      params: {
        part: 'snippet',
        maxResults: 40,
        q: keyword.payload,
        type: 'video',
      },
    });
    yield put({
      type: SEARCHED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    yield put({ type: SEARCHED_VIDEO_FAIL, payload: error.message });
  }
}

function* watchVideosBySearch() {
  yield takeEvery(SEARCHED_VIDEO_REQUEST, getVideosBySearch);
}

export default function* rootSaga() {
  yield spawn(watchPopularVideos);
  yield spawn(watchVideoById);
  yield spawn(watchRelatedVideos);
  yield spawn(watchVideosBySearch);
}
