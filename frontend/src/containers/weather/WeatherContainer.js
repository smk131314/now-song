import React, { Component } from 'react';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';
import axios from 'axios';
import api from '../../api/WeatherApi';

const API_KEY = 'f5faa1669b53551d8f05538dded54df1';

class WeatherContainer extends Component {
    state = {
        temp: '',
        cast: '',
        time: '',
        week: '',
        date: '',
    };

    getWeather = async () => {
        const response = await api.get('/weather',
        {
            params: {
                q: 'Seoul',
                APPID: API_KEY
            },
        },
        err => console.log(err.response)
        );
        let preTemp= Math.ceil(response.data.main.temp - 273.15);
            // 영상, 영하 표시
        preTemp = preTemp >= 0 ? '+ ' + preTemp : '- '+preTemp;
        
        this.setState({
            temp: preTemp,
            cast: response.data.weather[0].main,
        });
    }

    getTime = () => {
        let monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September","October", "November", "December"];
      
        let weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let d = new Date();
        let hour = d.getHours();
        let ampm = hour >= 12 ? '  p.m.' : '  a.m.';
        hour %= 12;
        let minute = d.getMinutes();
        let day = d.getDate();
        let month = monthNames[d.getMonth()];

        let date = month + ', '+ String(day);
        let week = weekNames[d.getDay()];
        let time = String(hour) + ':' + String(minute) + ampm;
        this.setState({time,week,date});
    }

    // 위,경도 가져오기
    // getPosition = () => {
    //     const options = {
    //         timeout: 10000,
    //         enableHighAccuracy: true,
    //         maximumAge: 0
    //     };
        
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition((position) => {
    //             this.setState({
    //                 lat: position.coords.latitude,
    //                 lon: position.coords.longitude
    //             });
    //         }, (error)=> {
    //             console.log(error)
    //         }, options);
    //     }

    //     this.getWeather();
    // }


    componentDidMount() {
        this.getWeather()
        this.getTime()
        // setInterval을 설정해서 실시간으로 시간 업데이트
        // setInterval(this.getTime,1);
        // setInterval(this.getWeather,1000);
    }

    render() {
        const { temp, cast, week, date, time } = this.state;
        return <WeatherInfo temp={temp} cast={cast} week={week} date={date} time={time} />;
    }
}

export default WeatherContainer;