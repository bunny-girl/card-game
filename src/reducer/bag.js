import {GET_CARD} from "../action/index";
import cardData from "../data/card";

let DEFAULT = {
    card: []
};

const bag = (state = DEFAULT, action) => {
    switch (action.type) {
        case GET_CARD :
            let card = cardData.find(c => c.id === action.id);
            console.log(state);
            return {
                card: [
                    ...state.card,
                    card
                ]
            };
        default:
            return state;
    }
};

export default bag;