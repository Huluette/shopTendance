import axios from 'axios';


export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

export const getProducts = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3000/products').then((res) => {
            dispatch({type: GET_PRODUCTS, payload: res.data})
        });
    };
}

export const addProduct = (data) => {
    return (dispatch) => {
        return axios.post('http://localhost:3000/products', data).then(() => {
            dispatch({type: ADD_PRODUCT, payload: data});
        });
    }
}

export const editProduct= (data) => {
    return (dispatch) => {
        return axios.put(`http://localhost:3000/products/${data.id}`, data).then(() => {
            dispatch({type: EDIT_PRODUCT, payload: data});
        });
    }
}