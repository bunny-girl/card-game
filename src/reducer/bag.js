import {GET_CARD, GET_LOOT, PUT_CARD_INTO_DECK} from "../action/index";
import cardData from "../data/card";
import {analyseLootPack} from "../logic/compute";

let DEFAULT = {
    card: [],
    deck: [],
    coin: 0,
};

const bag = (state = DEFAULT, action) => {
    let card, coin;
    switch (action.type) {
        case GET_CARD :
            card = cardData.find(c => c.id === action.id);
            console.log(state);
            return {
                ...state,
                card: [
                    ...state.card,
                    card
                ]
            };
        case PUT_CARD_INTO_DECK :
            return {
                ...state,
                deck: [
                    ...state.deck,
                    action.id
                ]
            };
        case GET_LOOT :
            let {coin : coinAdd , card : cardAdd} = analyseLootPack(action.id);
            coin = state.coin;
            card = state.card;

            coin += coinAdd;
            if (cardAdd) {
                card.push(cardAdd);
            }

            return {
                ...state,
                card,
                coin
            };
        default:
            return state;
    }
};

export default bag;