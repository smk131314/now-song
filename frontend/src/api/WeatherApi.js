import axios from 'axios';

const API_KEY = 'f5faa1669b53551d8f05538dded54df1';
// 날씨 api를 GET request
export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
});