import axios from 'axios';

const request = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {
    key: 'AIzaSyBjyp5famrVugzpXh_wo-cHESSX3dHIJ3g',
  },
});

export default request;
