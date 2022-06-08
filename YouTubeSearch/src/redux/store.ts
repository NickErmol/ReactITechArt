import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import createSagaMiddleware from 'redux-saga';

import homeVideosReducer from './reducers/homeVideoReducer';
import relatedVideoReducer from './reducers/relatedVideoReducer';
import searchedVideosReducer from './reducers/searchedVideosReducer';
import selectedVideoReducer from './reducers/selectedVideoReducer';
import rootSaga from './saga/rootSaga';

const rootReducer = combineReducers({
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
