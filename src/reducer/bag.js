import {GET_CARD, GET_LOOT, PUT_CARD_INTO_DECK} from "../action/index";
import cardData from "../data/card";
import lootData from "../data/loot";
import {clone, getId} from "../util";

let DEFAULT = {
    card: [],
    deck: [],
    coin : 0,
    stamina : 0,
};

const createCard = id => {
    let _card = clone(cardData.find(c => c.id === id));
    _card._id = getId();
    return _card;
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
            let loot = lootData[action.id];
            coin = state.coin;
            card = state.card;
            if(loot){
                let sum = 0, item, choose;
                loot.map(item => sum += item.weight);

                let decision = Math.random() * sum;

                loot.map((l, index) => {
                    decision -= l.weight;
                    if(decision <= 0 && !item){
                        item = l;
                        choose = index;
                    }
                });

                item = item || {};

                if(item['coin']){
                    coin += item['coin'];
                }
                
                if(item['card']){
                    card.push(createCard(item['card']['id']))
                }
                
                console.log(coin);
                console.log(card);
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