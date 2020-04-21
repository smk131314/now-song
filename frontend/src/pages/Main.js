import React from "react";
// import MainStructure from "components/structure/MainStructure";

import MainStructure from "../components/structure/MainStructure/MainStructure";
import WeatherInfo from "../components/WeatherInfo/WeatherInfo"
import WeatherInfoWrapper from "../components/WeatherInfo/WeatherInfoWrapper";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer"
import UpNext from "../components/UpNext/UpNext";
import MusicPlayerWrapper from "../components/MusicPlayer/MusicPlayerWrapper/MusicPlayerWrapper";

const Main = () => {
    return (
    <MainStructure>
        <WeatherInfoWrapper>
            <WeatherInfo />
        </WeatherInfoWrapper>
        <MusicPlayerWrapper>
            <MusicPlayer/>
        </MusicPlayerWrapper>
        <UpNext />
    </MainStructure>);
};

export default Main;
