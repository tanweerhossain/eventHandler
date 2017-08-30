"use strict"

export function cartReducers(state=[{id: 1}] , action){
    switch(action.type){
        case "ADD_TO_CART":
            let cards = state.concat(action.payload);
            return cards;
        default:
            console.log('Not matching perfect action in cardReducers');
            break;
    }
    return state;
}