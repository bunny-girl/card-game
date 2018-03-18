/**
 * Created by Edel on 2018/3/18.
 */
import {combineReducers} from "redux";
import current from "./current";

const coreReducer = combineReducers({
    current,
});

export default coreReducer;