import { call, put, takeEvery } from 'redux-saga/effects';
import request from '../../Api/api';

import {
  SEARCHED_VIDEO_FAIL,
  SEARCHED_VIDEO_REQUEST,
  SEARCHED_VIDEO_SUCCESS,
} from '../actionType';

function* getVideosBySearch(keyword: any) {
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
  } catch (error: any) {
    yield put({ type: SEARCHED_VIDEO_FAIL, payload: error.message });
  }
}

export default function* watchVideosBySearch() {
  yield takeEvery(SEARCHED_VIDEO_REQUEST, getVideosBySearch);
}
