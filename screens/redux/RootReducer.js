import {combineReducers} from "redux";
import { themeReducer } from "./Reducer";

export const rootReducer = combineReducers({
    theme : themeReducer,
});