/**
 * Created by Edel on 2018/4/5.
 */

import {getUserInfo} from "../logic/handler";

export const REQUEST_USER_INFO = 'REQUEST_USER_INFO';
export const REQUEST_USER_INFO_SUCCESS = 'REQUEST_USER_INFO_SUCCESS';

const requestUserInfo = () => {
	return {
		type: REQUEST_USER_INFO,
	}
};

const requestUserInfoSuccess = data => {
	return {
		type: REQUEST_USER_INFO_SUCCESS,
		data,
	}
};

export const fetchUserInfo = () => {
	return dispatch => {
		dispatch(requestUserInfo);
		return getUserInfo().then(
			v => dispatch(requestUserInfoSuccess(v))
		)
	}
};