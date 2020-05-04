import { WeatherAPI, YoutubeAPI } from './instance';

// 인스턴스를 활용하여 request 위한 함수
export const WeatherAPIRequest = (options) => {
    return WeatherAPI.instance(options).then(res => res);
};

export const YoutubeAPIRequest = (options) => {
    return YoutubeAPI.instance(options).then(res => res);
};