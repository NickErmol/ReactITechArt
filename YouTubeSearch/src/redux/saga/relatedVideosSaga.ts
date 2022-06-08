import { call, put, takeEvery } from 'redux-saga/effects';
import request from '../../Api/api';

import {
  RELATED_VIDEO_FAIL,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
} from '../actionType';

function* getRelatedVideos(id: any) {
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
  } catch (error: any) {
    yield put({
      type: RELATED_VIDEO_FAIL,
      payload: error.response.data.message,
    });
  }
}

export default function* watchRelatedVideos() {
  yield takeEvery(RELATED_VIDEO_REQUEST, getRelatedVideos);
}
