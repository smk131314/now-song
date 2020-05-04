import React, { Component } from "react";
import styles from "./WeatherInfo.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class WeatherInfo extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.getWeather();
    }

    render() {
        if (this.props.weather) {
            const {message, cityname} = this.props.weather;
            return (
                <div>
                    <h2>city name: {cityname}</h2>
                    <p>Message: {message}</p>
                </div>
            );
        } else {
            return <div>로딩중...</div>
        }
    }
}

// const WeatherInfo =({ temp, cast, week, date, time }) =>(

//         <section className = {cx("weatherInfo")}>
//             <span className = {cx("textContent")}>화창한 봄날,
//             <p>지금 이 노래 어때요?</p>
//             </span>
        
//             <div className = {cx("weatherData")}>
//                 <span className = {cx("location")}>Seoul, Korea</span>
//                 <span className = {cx("temp")}>{temp}°</span>
//                 <span className = {cx("cast")}>{cast}</span>
//             </div>
//             <div className = {cx("timeData")}>
//                 <span className = {cx("week")}>{week}</span>
//                 <span className = {cx("date")}>{date}</span>
//                 <span className = {cx("time")}>{time}</span>
//             </div>
//         </section>
// );


export default WeatherInfo;
