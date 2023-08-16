import { PRODUCT_ACTION_TYPES } from "./products.types";

const INITIAL_STATE = {
    products: [],
}

const productsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case PRODUCT_ACTION_TYPES.GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default:
            return state;
    }
}

export {
    productsReducer
}