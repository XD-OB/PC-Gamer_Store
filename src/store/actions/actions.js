import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from "./types";

function createAddToCartAction(productInfo, quantity) {
    return {
        type: ADD_TO_CART,
        product: {
            id: productInfo.id,
            name: productInfo.name,
            price: productInfo.price,
            image: productInfo.image,
        },
        quantity
    }
}

function createRemoveFromCartAction(index) {
    return {
        type: REMOVE_FROM_CART,
        index
    }
}

function createClearCartAction() {
    return {
        type: CLEAR_CART
    }
}

export function addToCart(productInfo, quantity) {
    return (dispatch) => {
        dispatch(createAddToCartAction(productInfo, quantity));
    }
}

export function removeFromCart(index) {
    return (dispatch) => {
        dispatch(createRemoveFromCartAction(index));
    }
}

export function clearCart() {
    return (dispatch) => {
        dispatch(createClearCartAction());
    }
}

