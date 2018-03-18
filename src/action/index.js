/**
 * Created by Edel on 2018/3/18.
 */

export const CHANGE_SCENE = 'CHANGE_SCENE';
export const change_scene = (target) => {
    return {
        type: CHANGE_SCENE,
        target
    }
};