import {GET_CARD, GET_LOOT} from "../action/index";
import cardData from "../data/card";
import lootData from "../data/loot";

let DEFAULT = {
    card: [],
    deck: [],
    coin : 0,
    stamina : 0,
};

const getCard = id => cardData.find(c => c.id === id);

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
                    card.push(getCard(item['card']['id']))
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