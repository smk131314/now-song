import React from "react";
import styles from "./WeatherInfoWrapper.module.css";
import classNames from "classnames/bind";
import WeatherInfo from "../WeatherInfo";

const cx = classNames.bind(styles);

const WeatherInfoWrapper = ({children}) =>(
    <div className = {cx("wrapper")}>{children}</div>
);

export default WeatherInfoWrapper