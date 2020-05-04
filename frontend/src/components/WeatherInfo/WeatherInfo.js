import React, { Component } from "react";
import styles from "./WeatherInfo.module.css";
import classNames from "classnames/bind";
import PropTypes from "prop-types"
const cx = classNames.bind(styles);

const WeatherInfo =({ temp, cast, week, date, time }) =>(

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

// WeatherInfo.propTypes = {
//     temp: PropTypes.string.isRequired,
//     cast: PropTypes.string.isRequired,
//     week: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     time: PropTypes.string.isRequired,
// };

export default WeatherInfo;
