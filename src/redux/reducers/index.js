import { combineReducers } from "redux";
import { DetailReducer } from "./detailReducer";

const reducers = combineReducers({
    Test: DetailReducer,
});

export default reducers;