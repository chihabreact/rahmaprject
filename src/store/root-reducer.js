import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { productsReducer } from "./products/products.reducer";
import { categoriesReducer } from "./categories/categories.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    categories: categoriesReducer
})

export {
    rootReducer
};