import {REQUEST_USER_INFO_SUCCESS} from "../action/userInfo";

let DEFAULT = {
	nickname: "",
	gender: "",
	uid: ""
};

const userInfo = (state = DEFAULT, action) => {
	switch (action.type) {
		case REQUEST_USER_INFO_SUCCESS:
			return {
				nickname: action.data.nickname,
				gender: action.data.gender,
				uid: action.data.uid
			};
		default:
			return state;
	}
};

export default userInfo;