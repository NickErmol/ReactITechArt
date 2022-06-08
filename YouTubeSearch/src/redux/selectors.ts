export const getNextPageToken = (state: any) : string => state.homeVideos.nextPageToken;
export const getHomeVideos = (state: any) : any => state.homeVideos.videos;
export const getIsHomeVideosLoading = (state: any) : boolean => state.homeVideos.loading;
export const getSearchedVideos = (state: any) : any => state.searchedVideos.videos;
export const getIsSearchedVideosLoading = (state: any) : boolean => state.searchedVideos.loading;
export const getRelatedVideos = (state: any) : any => state.relatedVideos.videos;
export const getSelectedVideo = (state: any) : any => state.selectedVideo.video;
export const getIsSelectedVideosLoading = (state: any) : boolean => state.selectedVideo.loading;

