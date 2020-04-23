import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";

import { rootReducers } from "./modules";

// 스토어 파일, Root.js에서 불러서 사용

// 크롬 데브 툴스 설정입니다.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

export default createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(epicMiddleware))
);

