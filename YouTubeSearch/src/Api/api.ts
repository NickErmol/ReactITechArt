import axios from 'axios';
import { env } from 'process';

const request = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  // baseURL: env.BASE_URL,
  params: {
    key: 'AIzaSyBjyp5famrVugzpXh_wo-cHESSX3dHIJ3g',
    // key: env.API_KEY,
  },
});

export default request;
