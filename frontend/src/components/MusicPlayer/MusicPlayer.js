import React from "react";
import styles from "./MusicPlayer.module.css";
import classNames from "classnames/bind";

import { FaRegHeart, FaPlus, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import albumcover from '../img/albumcover.jpg';
import vinyl from '../img/vinyl.png';

const cx = classNames.bind(styles);


const MusicPlayer = () => {
    return (
        <section className = {cx("player")}>
            <div className = {cx("playerImg")}>
                <img className = {cx("album-art")} src={albumcover} alt="album cover image"/>
                <div className = {cx("vinyl")}></div>
            </div>
            <div className = {cx("infoAndBtn")}>
                <div className = {cx("info")}>
                    <span className = {cx("artistName")}>Dua Lipa</span>
                    <span className = {cx("musicTitle")}>Break My Heart</span>
                </div>
                <div className = {cx("Btn")}>
                    <button className = {cx("Btn-plus")}><FaPlus /></button>
                    <button className = {cx("Btn-heart")}><FaRegHeart /></button>
                </div>
            </div>
            <div className = {cx("playerBar")}>
                <div className = {cx("playTime")}>
                    <span className = {cx("cur-time")}>1:32</span>
                    <span className = {cx("length")}>3:45</span>
                </div>                
                <div className = {cx("progressBar")}>
                    <div className = {cx("bar")}></div>
                </div>
            </div>
            <div className = {cx("playControls")}>
                <button className = {cx("play-prev")}><FaChevronLeft /></button>
                <button className = {cx("play-and-pause")}><FaPlay /></button>
                <button className = {cx("play-next")}><FaChevronRight /></button>
            </div>
        </section>
    );
};

export default MusicPlayer;