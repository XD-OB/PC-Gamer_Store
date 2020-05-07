import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from '../actions/types';

export function cartReducer(state, action) {
    switch(action.type) {
        case ADD_TO_CART: {
            return [
                ...state,
                {
                    product: action.product,
                    quantity: action.quantity
                }
            ]
        }
        case REMOVE_FROM_CART: {
            const new_state = [...state];
            new_state.splice(action.index, 1);
            return new_state;
        }
        case CLEAR_CART: {
            return [];
        }
        default: {
            if (state === undefined)
                return [];
            return state;
        }
    }
}