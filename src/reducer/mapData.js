import {REQUEST_MAP_DATA_SUCCESS} from "../action/mapData";

let DEFAULT = {
    area : {},
    map : {},
    event : {}
};

const mapData = (state = DEFAULT, action) => {
	switch (action.type) {
		case REQUEST_MAP_DATA_SUCCESS:
			return {
				area: action.data.area,
				map: action.data.map,
				event: action.data.event,
			};
        default:
            return state;
    }
};

export default mapData