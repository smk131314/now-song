import React from "react";
import styles from "./MusicPlayer.module.css";
import classNames from "classnames/bind";
import WeatherInfo from "../WeatherInfo/WeatherInfo";

const cx = classNames.bind(styles);

const MusicPlayer = () => {
    return (
        // <section class="player">
        //     <div class="playerImg">
        //         <img class="album-art" src="img/albumcover.jpg" alt="album cover image">
        //         <img class="vinyl" src="img/vinyl.png" alt="vinyl image">
        //     </div>
        //     <div class="infoAndBtn">
        //         <div class="info">
        //             <span class="artistName">Dua Lipa</span>
        //             <span class="musicTitle">Break My Heart</span>
        //         </div>
        //         <div class="Btn">
        //             <button><i class="fas fa-plus"></i></button>
        //             <button><i class="far fa-heart"></i></button>
        //         </div>
        //     </div>
        //     <div class="playerBar">
        //         <span class="cur-time">1:32</span>
        //         <span class="length">3:45</span>
        //         <div class="progressBar">
        //             <div class="bar"></div>
        //         </div>
        //     </div>
        //     <div class="playControls">
        //         <button class="play-prev"><i class="fas fa-chevron-left"></i></button>
        //         <button class="play-and-pause"><i class="fas fa-play"></i></button>
        //         <button class="play-next"><i class="fas fa-chevron-right"></i></button>
        //     </div>
        // </section>
    );
};

export default WeatherInfo;