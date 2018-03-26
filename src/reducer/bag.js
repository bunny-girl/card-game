import {} from "../action/index";

let DEFAULT = {
    card : []
};

const bag = (state = DEFAULT, action) => {
    switch (action.type) {
        // case CHANGE_SCENE :
        //     return {
        //         ...state,
        //         scene: action.target,
        //     };
        default:
            return state;
    }
};

export default bag;