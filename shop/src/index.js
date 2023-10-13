import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { getProducts } from './actions/product.action';
import { createRoot } from 'react-dom/client';
import rootReducer from "./reducers";

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

store.dispatch(getProducts());

const root = document.getElementById('root');
const appRoot = createRoot(root);
appRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);


