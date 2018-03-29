/**
 * Created by Edel on 2018/3/18.
 */

export const REQUEST_USER_DATA = 'REQUEST_USER_DATA';
export const requestUserData = () => {
    console.log('fuck!');
    return {
        type : REQUEST_USER_DATA,
    }
};

export const REQUEST_USER_DATA_SUCCESS = 'REQUEST_USER_DATA_SUCCESS';
export const requestUserDataSuccess = data => {
    return {
        type : REQUEST_USER_DATA_SUCCESS,
        data,
    }
}

export const CHANGE_SCENE = 'CHANGE_SCENE';
export const change_scene = (target = "lobby") => {
    return {
        type: CHANGE_SCENE,
        target
    }
};

export const MOVE_FORWARD = 'MOVE_FORWARD';
export const move_forward = eventId => {
    return {
        type: MOVE_FORWARD,
        eventId
    }
};

export const REQUEST_EVENT = 'REQUEST_EVENT';
const requestEvent = (mapId, areaId) => {
    return {
        type : REQUEST_EVENT,
        mapId,
        areaId,
    }
}

export const REQUEST_EVENT_SUCCESS = 'REQUEST_EVENT_SUCCESS';
const requestEventSuccess = data => {
    return {
        type : REQUEST_EVENT_SUCCESS,
        data : data
    }
}

export const DEAL_EVENT = 'DEAL_EVENT';
export const dealEvent = eventId => {
    return {
        type: DEAL_EVENT,
        eventId
    }
};

export const ENTER_MAP = 'ENTER_MAP';
export const enterMap = (mapId, areaId) => {
    return {
        type: ENTER_MAP,
        mapId,
        areaId
    }
};

export const GET_CARD = 'GET_CARD';
export const getCard = (id) => {
    return {
        type: GET_CARD,
        id,
    }
};

export const GET_LOOT = 'GET_LOOT';
export const getLoot = (id) => {
    return {
        type: GET_LOOT,
        id,
    }
};

export const PUT_CARD_INTO_DECK = 'PUT_CARD_INTO_DECK';
export const putCardIntoDeck = (id) => {
    return {
        type: PUT_CARD_INTO_DECK,
        id,
    }
};

export const SELECT_AREA = 'SELECT_AREA';
export const selectArea = (area) => {
    return {
        type: SELECT_AREA,
        area,
    }
};