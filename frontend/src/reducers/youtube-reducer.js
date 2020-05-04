import { GET_VIDEO } from '../actions/actions';

const initialState = {
    channelId: "",
    title: "",
    description: ""
}
  
export default function(state = initialState, action){
    switch (action.type) {
        case GET_VIDEO:
            const { channelId, title, description } = action.payload.data;
            return Object.assign({}, state, { channelId, title, description });
        default:
            return state;
    }
}