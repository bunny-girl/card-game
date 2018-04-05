/**
 * Created by Edel on 2018/3/18.
 */
import {combineReducers} from "redux";
import current from "./current";
import bag from "./bag";
import userData from "./userData";
import userInfo from "./userInfo";
import mapData from "./mapData";

const coreReducer = combineReducers({
    current,
    bag,
    userData,
	userInfo,
	mapData,
});

export default coreReducer;