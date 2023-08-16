const INITIAL_STATE = {
    categories: [],
}

const categoriesReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: payload
            }
        default:
            return state
    }
}

export {
    categoriesReducer
}