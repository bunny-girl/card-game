/**
 * Created by Edel on 2018/3/18.
 */
import {CHANGE_SCENE, ENTER_MAP, MOVE_FORWARD, SELECT_AREA, REQUEST_USER_DATA, REQUEST_USER_DATA_SUCCESS} from "../action/index";

let DEFAULT = {
    scene: 'lobby',
    mapId: '',
    areaId: '',
    progress: 0,
    event : '',
    isFetching : false,
    stamina : 10
};

const current = (state = DEFAULT, action) => {
    switch (action.type) {
        case CHANGE_SCENE :
            return {
                ...state,
                scene: action.target,
            };
        case MOVE_FORWARD :
            return {
                ...state,
                progress: state.progress + 1,
                event : action.eventId
            };
        case REQUEST_USER_DATA :
            return {
                ...state,
                isFetching : true
            };
        case REQUEST_USER_DATA_SUCCESS :
            return {
                ...state,
                isFetching : false
            };
        case SELECT_AREA :
            return {
                ...state,
                areaId: action.area
            };
        case ENTER_MAP :
            return {
                scene: "map",
                mapId: action.mapId,
                areaId: action.areaId,
                progress: 0
            };
        default:
            return state;
    }
};

export default current;