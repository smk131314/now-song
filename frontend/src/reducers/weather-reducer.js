import { GET_WEATHER } from '../actions/actions';

// API 호출함수의 반환값에 따라 reducer의 state구조 설정
const initialState = {
    message:"",
    cityname:""
}

export default function(state=initialState, action) {
    switch (action.type) {
        case GET_WEATHER:
            const {message,cityname} = action.payload.data;
            return Object.assign({},state,{message,cityname});
        default:
            return state;
    }
}