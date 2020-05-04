import axios from 'axios';

// 1.  사용할 REST API 정보를 모은 인스턴스
export const WEATHER_APP_ID = 'f5faa1669b53551d8f05538dded54df1';
export const WeatherAPI = (function() {
    const instance = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5/weather',
        timeout: 5000,
        headers: {
          'Content-Type': 'application/json'
        }
    });

    return {
        instance
    }
})();

export const YOUTUBE_APP_ID = "AIzaSyDJHz3_fnLnAOzSOgbtFeIPg0u-jN4E0sI";
export const YoutubeAPI = (function() {
  const instance = axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search`,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return {
    instance
  }
})();