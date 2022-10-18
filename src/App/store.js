import {configureStore } from "@reduxjs/toolkit";
import orderReducer from '../Features/order-slice'

const store = configureStore({
    reducer :{
        order: orderReducer,
    }
})

export default store;
