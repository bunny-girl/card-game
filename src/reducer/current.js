/**
 * Created by Edel on 2018/3/18.
 */
import {CHANGE_SCENE, ENTER_MAP, MOVE_FORWARD} from "../action/index";

let DEFAULT = {
    scene: 'lobby',
    map: '',
    progress: 0
};

const current = (state = DEFAULT, action) => {
    switch (action.type) {
        case CHANGE_SCENE :
            return {
                scene: action.target,
                progress: state.progress
            };
        case MOVE_FORWARD :
            return {
                scene: state.scene,
                progress: state.progress + 1
            };
        case ENTER_MAP :
            return {
                scene: "map",
                map: action.map
            };
        default:
            return state;
    }
};

export default current;