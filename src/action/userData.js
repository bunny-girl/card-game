/**
 * Created by Edel on 2018/4/5.
 */

import {getUserData} from "../logic/handler";

export const REQUEST_USER_DATA = 'REQUEST_USER_DATA';
export const REQUEST_USER_DATA_SUCCESS = 'REQUEST_USER_DATA_SUCCESS';

const requestUserData = () => {
	return {
		type: REQUEST_USER_DATA,
	}
};

const requestUserDataSuccess = data => {
	return {
		type: REQUEST_USER_DATA_SUCCESS,
		data,
	}
};

export const fetchUserData = () => {
	return dispatch => {
		dispatch(requestUserData);
		return getUserData().then(
			v => dispatch(requestUserDataSuccess(v))
		)
	}
};