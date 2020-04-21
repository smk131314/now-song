import React from "react";
import styles from "./MusicPlayerWrapper.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const MusicPlayerWrapper = ({children}) =>(
    <div className = {cx("music-player-wrapper")}>{children}</div>
);

export default MusicPlayerWrapper;