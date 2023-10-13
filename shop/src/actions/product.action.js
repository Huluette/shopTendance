import axios from 'axios';

export const PRODUCTS = 'PRODUCTS';

export const getProcuts = () => {
    return async dispatch => {
        const response = await axios.get('http://localhost:3000/products').then((res) => {
            dispatch({
                type: PRODUCTS,
                payload: res.data
            });
        });
    };
};

