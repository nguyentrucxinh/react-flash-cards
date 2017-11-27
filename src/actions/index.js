import axios from 'axios';

import { CARD_PAGE_LOADED } from '../constants/actionTypes';
import { API_URL } from '../constants/api';

export function findAllAxios() {
    return (dispatch) => {
        return axios.get(API_URL)
            .then((response) => {
                dispatch(findAll(response.data));
            })
    }
}

export function findAll(cards) {
    return {
        type: CARD_PAGE_LOADED,
        cards: cards
    }
}