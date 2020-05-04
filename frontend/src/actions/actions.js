import API from '../api/index';

export const GET_WEATHER = 'GET_WEATHER';
export const getWeather = () => ({
    type: GET_WEATHER,
    payload:API.getWeather()
});

export const GET_VIDEO = 'GET_VIDEO';
export const getVideo = () => ({
  type: GET_VIDEO,
  payload: API.getVideo()
});