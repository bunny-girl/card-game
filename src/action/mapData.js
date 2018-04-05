/**
 * Created by Edel on 2018/4/5.
 */

import {getMapData, getProgress} from "../logic/handler";

export const REQUEST_MAP_DATA = 'REQUEST_MAP_DATA';
export const REQUEST_MAP_DATA_SUCCESS = 'REQUEST_MAP_DATA_SUCCESS';

const requestMapData = () => {
	return {
		type: REQUEST_MAP_DATA,
	}
};

const requestMapDataSuccess = data => {
	return {
		type: REQUEST_MAP_DATA_SUCCESS,
		data,
	}
};

export const fetchMapData = (areaId, mapId) => {
	return dispatch => {
		dispatch(requestMapData);
		return getMapData(areaId, mapId).then(
			v => dispatch(requestMapDataSuccess(v))
		)
	}
};

export const REQUEST_MOVE_FORWARD = 'REQUEST_MOVE_FORWARD';
export const REQUEST_MOVE_FORWARD_SUCCESS = 'REQUEST_MOVE_FORWARD_SUCCESS';

const requestMoveForward = () => {
	return {
		type: REQUEST_MOVE_FORWARD,
	}
};

const requestMoveForwardSuccess = data => {
	return {
		type: REQUEST_MOVE_FORWARD_SUCCESS,
		data,
	}
};

export const moveForward = () => {
	return dispatch => {
		dispatch(requestMoveForward);
		return getProgress().then(
			v => dispatch(requestMoveForwardSuccess(v))
		)
	}
};

