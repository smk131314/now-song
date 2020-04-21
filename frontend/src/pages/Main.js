import React from "react";
// import MainStructure from "components/structure/MainStructure";

import MainStructure from "../components/structure/MainStructure/MainStructure";
import WeatherInfo from "../components/WeatherInfo/WeatherInfo"
import WeatherInfoWrapper from "../components/WeatherInfo/WeatherInfoWrapper";


const Main = () => {
    return <MainStructure>
        <WeatherInfoWrapper>
            <WeatherInfo />
        </WeatherInfoWrapper>
    </MainStructure>;
};

export default Main;