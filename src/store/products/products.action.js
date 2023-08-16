import { createAction } from "../../utils/reducer/reducer.utils";
import { PRODUCT_ACTION_TYPES } from "./products.types";

const setProducts = (products) => {
    return createAction(PRODUCT_ACTION_TYPES.GET_PRODUCTS, products);
}

export {
    setProducts
}