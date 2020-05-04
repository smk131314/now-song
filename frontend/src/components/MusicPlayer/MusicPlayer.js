import React, { Component } from "react";
import styles from "./MusicPlayer.module.css";
import classNames from "classnames/bind";

import { FaRegHeart, FaPlus, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import albumcover from '../img/albumcover.jpg';
import vinyl from '../img/vinyl.png';

import Youtube from '../../api/Youtube';

const cx = classNames.bind(styles);
const API_KEY = "AIzaSyDJHz3_fnLnAOzSOgbtFeIPg0u-jN4E0sI";

class MusicPlayer extends Component {
    state = {
        videos: [],
        selectedvideo: null,
    }

    // 유튜브api search로 받아옴, searchTerm 매개변수로 검색어 받아오기
    handleSubmit = async () => {
        const response = await Youtube.get('search', {
            params: {
                // q: query, 검색어
                q: this.props.searchTerm,
                part: "snippet",
                key: API_KEY,
                maxResults: 5,
                // regionCode: "KR",
            }
        });
        this.setState({ videos: response.data.items, selectedvideo: response.data.items[0] });
        console.log(this.props.searchTerm);
    }

    componentDidMount() {
        this.handleSubmit()
    }

    render (){
        // 첫번째 비디오 데이터
        const { selectedvideo } = this.state;

        return (
            <section className = {cx("player")}>
                <VideoDetail video={ selectedvideo }/>
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
    }
}

export default MusicPlayer;

// 비디오 출력 컴포넌트
const VideoDetail = ({ video }) => {
    if (!video) return <div>Loading...</div>;

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <iframe
              frameBorder="0"
              height="100%"
              width="100%"
              title="Video Player"
              src={videoSrc}
            />
            <span>{video.snippet.title}</span>
        </div>
    );
}

