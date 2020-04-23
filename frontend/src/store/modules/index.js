import { ping } from "./ping";
import { combineReducers } from "redux";

export const rootReducers = combineReducers({ ping });

// 루트 리듀서 (여러개의 리듀서를 합친 것)