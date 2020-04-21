import React from "react";
import styles from "./WeatherInfoWrapper.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const WeatherInfoWrapper = ({children}) =>(
    <div className = {cx("weather-info-wrapper")}>{children}</div>
);

export default WeatherInfoWrapper;