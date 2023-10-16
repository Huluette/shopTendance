import axios from 'axios';


export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export const getProducts = () => {
    return async dispatch => {
        const response = await axios.get('http://localhost:3000/products').then((res) => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });
        });
    };
};

export const addProduct = (data) => {
    return async dispatch => {
        const response = await axios.post('http://localhost:3000/products', data).then((res) => {
            dispatch({
                type: ADD_PRODUCT,
                payload: data
            });
        });
    };
};

