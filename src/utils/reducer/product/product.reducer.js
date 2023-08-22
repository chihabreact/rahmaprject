const INITIAL_STATE = {
    product: null,
    mainImage: null
}

const PRODUCT_ACTION_TYPES = {
    SET_MAIN_IMAGE: "SET_MAIN_IMAGE",
    SET_MAIN_PRODUCT: "SET_MAIN_PRODUCT"
  }
  
const productReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case PRODUCT_ACTION_TYPES.SET_MAIN_IMAGE:
        return {
          ...state,
          mainImage: payload
        }
      case PRODUCT_ACTION_TYPES.SET_MAIN_PRODUCT:
        return {
            product: payload.product,
            mainImage: payload.mainImageUrl
        }
      default:
        return state;
    }
}

export {
    INITIAL_STATE,
    PRODUCT_ACTION_TYPES,
    productReducer
}