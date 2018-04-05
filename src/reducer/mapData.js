import {REQUEST_MAP_DATA_SUCCESS, REQUEST_MOVE_FORWARD_SUCCESS} from "../action/mapData";

let DEFAULT = {
    area : {},
    map : {},
	event: {},
	progress: 0
};

const mapData = (state = DEFAULT, action) => {
	switch (action.type) {
		case REQUEST_MAP_DATA_SUCCESS:
			return {
				area: action.data.area,
				map: action.data.map,
				event: action.data.event,
				progress: action.data.progress
			};
		case REQUEST_MOVE_FORWARD_SUCCESS:
			// map = {...state.map, progress : state.map.progress + 1};
			return {
				...state,
				progress: state.progress + 1,
			};
        default:
            return state;
    }
};

export default mapData