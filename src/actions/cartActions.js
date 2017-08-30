"use strict"
export function addToCart(card){
    return {
        type:"ADD_TO_CART",
        payload: card
    };
}