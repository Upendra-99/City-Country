import { loadingReducer } from "./reducer";
import { createStore } from "redux";

export const store = createStore(loadingReducer)