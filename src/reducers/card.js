import {
    CARD_PAGE_LOADED
} from '../constants/actionTypes';

const defaultState = {
    cards: []
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
