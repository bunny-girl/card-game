/**
 * Created by Edel on 2018/4/5.
 */

import {getMapData} from "../logic/handler";

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