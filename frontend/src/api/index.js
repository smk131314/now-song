import { WEATHER_APP_ID, YOUTUBE_APP_ID } from './instance';
import { WeatherAPIRequest, YoutubeAPIRequest } from './request';

// Request함수를 이용하여 API 호출함수
async function getWeather(cityname) {
    const data = await WeatherAPIRequest({
        url: `?q=${cityname}&appid=${WEATHER_APP_ID}`,
        method: 'GET'
    });
    return data;
}

async function getVideo(searchTerm) {
    const data = await YoutubeAPIRequest({
      url: `?key=${YOUTUBE_APP_ID}&q=${searchTerm}`,
      method: 'GET'
    });
    return data;
}
  
export default { getWeather,getVideo }
