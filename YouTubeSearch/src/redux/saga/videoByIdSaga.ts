import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../Api/api';

import {
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
} from '../actionType';

function* getVideoById(id: any) {
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
  } catch (error: any) {
    yield put({ type: SELECTED_VIDEO_FAIL, payload: error.message });
  }
}

export default function* watchVideoById() {
  yield takeLatest(SELECTED_VIDEO_REQUEST, getVideoById);
}
