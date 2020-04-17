import React from "react";
// import MainStructure from "components/structure/MainStructure";

import MainStructure from "../components/structure/MainStructure/MainStructure";
import WeatherInfo from "../components/WeatherInfo/WeatherInfo"

const Main = () => {
    return <MainStructure>
        <WeatherInfo/>
    </MainStructure>;
};

export default Main;