/**
 * Created by Edel on 2018/3/18.
 */
import {CHANGE_SCENE} from "../action/index";

let DEFAULT = {
    scene: 'lobby',
};

const current = (state = DEFAULT, action) => {
    switch (action.type) {
        case CHANGE_SCENE :
            return {
                scene: state.scene
            };
        default:
            return state;
    }
};

export default current;