import { legacy_createStore } from "redux";
import myReducer from "../Reducer/reducer";

export const myStore = legacy_createStore(myReducer) ;