// import React, { Component } from 'react';
// import WeatherInfo from '../components/WeatherInfo/WeatherInfo';
// import axios from 'axios'; // api 정보를 쉽게 가져오기 위해 axios 설치

// class WeatherContainer extends Component {
//     state = {
//         temp: '',
//         cast: '',
//         location: '',
//     };

//     // 기본 api 주소정보로 baseURL과 APPID 설정
//     api = axios.create({
//         baseURL: 'https://api.openweathermap.org/data/2.5',
//         params: {
//             APPID: 'f5faa1669b53551d8f05538dded54df1'
//         }
//     });

//     componentDidMount() {
//         navigator.geolocation.getCurrentPosition(position => {
//             // api 추가 파라미터로 latitude, longitude 추가
//             const getWeather = this.api.get('/weather',
//                 {
//                     params: {
//                         lat: position.coords.latitude,
//                         lon: position.coords.longitude,
//                     },
//                 },
//                 err => console.log(err)
//             );
//             getWeather
//                 .then(res => {
//                     this.setState({
//                         // 온도 섭씨온도 계산
//                         temp: Math.ceil(res.data.main.temp - 273.15),
//                         cast: res.data.weather[0].main,
//                         location: res.data.name,
//                     });
//                 })
//                 .catch(err => console.log(err));
//         });
//     }

//     render() {
//         const { temp, cast, location } = this.state;
//         return <WeatherInfo temp={temp} cast={cast} location={location} />;
//     }
// }

// export default WeatherContainer;