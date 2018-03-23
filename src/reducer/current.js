/**
 * Created by Edel on 2018/3/18.
 */
import {CHANGE_SCENE, ENTER_MAP, MOVE_FORWARD} from "../action/index";

let DEFAULT = {
    scene: 'lobby',
    mapId: '',
    areaId: '',
    progress: 0
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
                progress: state.progress + 1
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