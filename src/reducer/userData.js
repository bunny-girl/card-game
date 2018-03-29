import {REQUEST_USER_DATA_SUCCESS} from "../action/index";

let DEFAULT = {
    maxStamina : "N/A",
    maxLevel : "N/A"
};

const userData = (state = DEFAULT, action) => {
	switch (action.type) {
		case 'REQUEST_USER_DATA_SUCCESS':
			return {
				maxStamina : action.data.maxStamina,
				maxLevel : action.data.maxLevel
			}
        default:
            return state;
    }
};

export default userData;