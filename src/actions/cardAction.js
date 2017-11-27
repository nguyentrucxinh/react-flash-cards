import axios from 'axios';

import { CARD_PAGE_LOADED } from '../constants/actionTypes';
import { API_URL } from '../constants/api';

export function findAll() {
    return (dispatch) => {
        return axios.get(API_URL)
            .then((response) => {
                dispatch(findAll(response.data));
            })
    }
}

export function findAllAction(cards) {
    return {
        type: CARD_PAGE_LOADED,
        cards: cards
    }
}