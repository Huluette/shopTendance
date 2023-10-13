import { PRODUCTS } from "../actions/product.action";

const initialState = {};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS: 
            return action.payload;
        default:
            return state;
    }
}