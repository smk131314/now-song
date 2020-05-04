import { combineReducers } from 'redux';
import weather from './weather-reducer';
import video from './youtube-reducer';

const rootReducer = combineReducers({
    weather,
    video
})

export default rootReducer;