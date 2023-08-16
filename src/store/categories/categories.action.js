import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPES } from "./categories.types"

const setCategories = (categories) => {
    return createAction(CATEGORIES_ACTION_TYPES.GET_CATEGORIES, categories);
}

export {
    setCategories
}