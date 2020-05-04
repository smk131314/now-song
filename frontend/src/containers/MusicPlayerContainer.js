import React, { Component } from "react";
import { connect } from "react-redux";
import MusicPlayerWrapper from "../components/MusicPlayer/MusicPlayerWrapper/MusicPlayerWrapper";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";

export class MusicPlayerContainer extends Component {
    render () {
        return (
            <MusicPlayerWrapper>
                <MusicPlayer searchTerm={WeatherParsing().searchTerm}/>
            </MusicPlayerWrapper>
        );
    }
}

// 메인문구반영 & 음악추천 검색 키워드생성 위한 weather data 파싱하는 함수
// 날씨api로 데이터 받아와서 파싱
const WeatherParsing = () => {
    // 받아온 데이터
    const weather_data = {
        temp: '',
        cast: '',
    };
    let d = new Date();
    const time_season_data = {
        time: d.getHours(),
        month: d.getMonth(),
    };
    
    // 키워드 리스트
    const keywords = {
        weather: ["비","눈", "흐린"],
        season: ["봄","여름","가을","겨울"],
        time: ["오전","오후","밤","새벽"],
    }

    // 날씨키워드리턴, 비 or 눈, 흐린날 이면 검색어에 포함
    const parsingWeather = (cast) => {
        if (cast.includes('rain')) {
            return this.keywords.weather[0];
        }
        else if (cast.includes('snow')) {
            return this.keywords.weather[1];
        }
        else if (cast.includes('clouds')) {
            return this.keywords.weather[2];
        }
        return null;
    };
    
    // 시간, 계절 키워드 리턴, time: 24시단위로 불러옴, month: 0부터시작
    const parsingTime = (time, month) => {
        let time_keyword = [];

        if (month>=2 && month<5) {
            time_keyword.push(this.keywords.season[0]);
        }else if (month>=5 && month<8) {
            time_keyword.push(this.keywords.season[1]);
        }else if (month>=8 && month<10) {
            time_keyword.push(this.keywords.season[2]);
        }else time_keyword.push(this.keywords.season[3]);

        if (time>=6 && time<12) {
            time_keyword.push(this.keywords.time[0]);
        }else if (time>=12 && time<20) {
            time_keyword.push(this.keywords.time[1]);
        }else if (time>=20 && time<=24) {
            time_keyword.push(this.keywords.time[2]);
        }else time_keyword.push(this.keywords.time[3]);


        return time_keyword;
    };
    
    // 메인 텍스트, 검색어 가공해서 리턴
    let mainTextContent = '';
    let searchTerm = '';

    // searchTerm += parsingWeather(this.weather_data.cast);
    parsingTime(this.time_season_data.time, this.time_season_data.month).map(obj => searchTerm+=obj);
    searchTerm += '노래';

    let res = {
        mainTextContent: mainTextContent,
        searchTerm: searchTerm,
    };

    return res;
};