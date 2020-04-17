import React from "react";
import styles from "./WeatherInfo.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const WeatherInfo = () => {
    return (
        <section className = {cx("weatherInfo")}>
            <span className = {cx("textContent")}>화창한 봄날, 지금 이 노래 어때요?</span>
            <div className = {cx("weatherData")}>
                <span className = {cx("location")}>Seoul, Korea</span>
                <span className = {cx("temp")}>+ 27°</span>
                <span className = {cx("cast")}>Sunny</span>
            </div>
            <div className = {cx("timeData")}>
                <span className = {cx("week")}>Friday</span>
                <span className = {cx("date")}>April, 14</span>
                <span className = {cx("time")}>4:20 p.m.</span>
            </div>
        </section>
    );
};

export default WeatherInfo;