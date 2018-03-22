/**
 * Created by Edel on 2018/3/18.
 */

export const CHANGE_SCENE = 'CHANGE_SCENE';
export const change_scene = (target = "lobby") => {
    return {
        type: CHANGE_SCENE,
        target
    }
};

export const MOVE_FORWARD = 'MOVE_FORWARD';
export const move_forward = step => {
    return {
        type: MOVE_FORWARD,
        step,
    }
};

export const ENTER_MAP = 'ENTER_MAP';
export const enterMap = map => {
    return {
        type: ENTER_MAP,
        map
    }
};