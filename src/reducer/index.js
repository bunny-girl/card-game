/**
 * Created by Edel on 2018/3/18.
 */
import {combineReducers} from "redux";
import current from "./current";
import bag from "./bag";

const coreReducer = combineReducers({
    current,
    bag,
});

export default coreReducer;