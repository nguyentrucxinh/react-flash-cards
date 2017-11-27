import {
    CARD_PAGE_LOADED
} from '../constants/actionTypes';

const defaultState = {
    cards: [
        {
            id: 0,
            type: false,
            front: "front 111",
            back: "back 111",
            known: false
        }
    ]
  };

export default (state = defaultState, action) => {
    switch (action.type) {
        case CARD_PAGE_LOADED:
            return {
                ...state,
                cards: action.cards
            };
        default:
            return {
                ...state
            };
    }
};

