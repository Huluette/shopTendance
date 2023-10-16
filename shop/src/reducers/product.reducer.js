import { GET_PRODUCTS, ADD_PRODUCT } from "../actions/product.action";

const initialState = [];

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS: 
            return action.payload;
        case ADD_PRODUCT:
            return [...state, action.payload];
        default:
            return state;
    }
}