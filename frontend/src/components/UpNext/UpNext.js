import React from "react";
import styles from "./UpNext.module.css";
import classNames from "classnames/bind";

import albumart from '../img/albumcover.jpg';
import vinyl from '../img/vinyl.png';
import nextalbum from '../img/nextalbumcover.png';

const cx = classNames.bind(styles);

const UpNext = () => {
    return (
        <section className = {cx("upNext")}>
            <div className = {cx("curAlbum")}>
                <div className = {cx("curAlbumArt")}>
                    <div className = {cx("vinyl")}></div>
                    <img className = {cx("cur-album-art")} src={albumart} alt=""/>
                </div>
                <div className = {cx("albumInfo")}>
                    <span className = {cx("artistName")}>Dua Lipa</span>
                    <span className = {cx("albumName")}>Future Nostalgia</span>
                    <span className = {cx("releaseYear")}>2020</span>
                </div>
            </div>
            <div className = {cx("nextAlbum")}>
                <img className = {cx("nextAlbum")} src={nextalbum} alt=""/>
            </div>
        </section>
    );
};

export default UpNext;