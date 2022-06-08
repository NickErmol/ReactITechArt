import { createAction } from 'redux-actions';
import {
  HOME_VIDEOS_REQUEST,
  SEARCHED_VIDEO_REQUEST,
  SELECTED_VIDEO_REQUEST,
  RELATED_VIDEO_REQUEST,
  VIDEO_DETAILS_REQUEST,
} from './actionType';

export const homeVideo = createAction(HOME_VIDEOS_REQUEST);
export const searchedVideo = createAction(SEARCHED_VIDEO_REQUEST);
export const selectedVideo = createAction(SELECTED_VIDEO_REQUEST);
export const relatedVideo = createAction(RELATED_VIDEO_REQUEST);
export const videoDetails = createAction(VIDEO_DETAILS_REQUEST);
