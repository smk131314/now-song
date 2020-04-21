import React, { Component } from "react";
import styles from "./WeatherInfo.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const API_KEY = 'f5faa1669b53551d8f05538dded54df1';

class WeatherInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: 0,
            lon: 0,
            temp: 0,
            cast: '',
            location: '',
            time: '',
            week: '',
            date: '',
        }
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

    getPosition = () => {
        const options = {
            timeout: 10000,
            enableHighAccuracy: true,
            maximumAge: 0
        };
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            }, (error)=> {
                console.log(error)
            }, options);
        }

        this.getWeather();
    }

    getWeather = () => {
        const { lat, lon } = this.state;

        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(json => {
            let preTemp= Math.ceil(json.main.temp - 273.15);
            preTemp = preTemp >= 0 ? '+ ' + preTemp : '- '+preTemp;
            this.setState({
                temp: preTemp,
                cast: json.weather[0].main,
                location: json.name,
            });
        });
    }

    componentDidMount() {
        this.getPosition()
        // setInterval을 설정해서 실시간으로 시간 업데이트
        setInterval(this.getTime,1);
        setInterval(this.getWeather,1000);
    }

    render() {
        const { temp, cast, time, week, date } = this.state;

        return (
            <section className = {cx("weatherInfo")}>
             <span className = {cx("textContent")}>화창한 봄날,
             <p>지금 이 노래 어때요?</p>
             </span>
            
             <div className = {cx("weatherData")}>
                 <span className = {cx("location")}>Seoul, Korea</span>
                 <span className = {cx("temp")}>{temp}°</span>
                 <span className = {cx("cast")}>{cast}</span>
             </div>
             <div className = {cx("timeData")}>
        <span className = {cx("week")}>{week}</span>
        <span className = {cx("date")}>{date}</span>
        <span className = {cx("time")}>{time}</span>
             </div>
         </section>
        );
    }
}

export default WeatherInfo;

// const WeatherInfo = ({temp, cast, location}) => {
//     return (
//         <section className = {cx("weatherInfo")}>
//             <span className = {cx("textContent")}>화창한 봄날,
//             <p>지금 이 노래 어때요?</p>
//             </span>
            
//             <div className = {cx("weatherData")}>
//                 <span className = {cx("location")}>{location}Seoul, Korea</span>
//                 <span className = {cx("temp")}>{temp}+ 27°</span>
//                 <span className = {cx("cast")}>{cast}Sunny</span>
//             </div>
//             <div className = {cx("timeData")}>
//                 <span className = {cx("week")}>Friday</span>
//                 <span className = {cx("date")}>April, 14</span>
//                 <span className = {cx("time")}>4:20 p.m.</span>
//             </div>
//         </section>
//     );
// };