import React from "react";
import App from "./components/App";
import { Provider } from "react-redux";
// import store from "./store/configure";
import { BrowserRouter } from "react-router-dom";

// store수정위해 rootReducer추가 
import rootReducer from './reducers/root-reducer';
import { createStore } from "redux";
const store = createStore(rootReducer);

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};

export default Root;