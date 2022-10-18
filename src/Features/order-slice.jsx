import {createSlice } from '@reduxjs/toolkit';


const orderSlice = createSlice({
    name: "order",
    initialState: {
        order: [],
        takeOutOption: "",
        pay:false,
    },
    reducers: {
        /**
         * @param {payload} action.payload Add given pizza from order
         * 
         */
        addPizza: (state, action) => {
            state.order.push(action.payload);
        },
        
        /**
         * @param {payload} action.payload Remove given pizza from order
         * 
         */
        removePizza: (state, action ) =>{
            const index = state.order.findIndex(p => p.id === action.payload.id)
            console.log(action.payload.id);
            if (index > -1) { 
                state.order.splice(index, 1); 
            }
        },
        /**
         * @param {payload} action.payload Change given takeout option  
         * 
         */
        setTakeOutOption: (state , action) =>{
            state.takeOutOption = action.payload;
        },
        /**
         * @param {payload} action.payload Given pizza {id , topping} and change the current 
         * pizza toppings with given id to the given toppings, add or remove given topping
         */
        updatePizzaTopping: (state, action ) => {
            const {id,topping} = action.payload;
            const index = state.order.findIndex(p => p.id === id)
            if (index !== -1) {
                if(state.order[index].toppings.includes(topping))
                {
                    const _index = state.order[index].toppings.indexOf(topping);
                    if (_index > -1) { 
                        state.order[index].toppings.splice(_index, 1); 
                    }
                }
                else
                {
                    state.order[index].toppings.push(topping);
                }
            }
        },
        /**
         * @param {payload} action.payload Given pizza {id , size} and change the current 
         * pizza size with given id to the given size
         */
        updatePizzaSize: (state, action ) => {
            const {id,size} = action.payload;
            const index = state.order.findIndex(p => p.id === id)
            if (index !== -1) {
                state.order[index].size = size;
            }
        },
        /**
         *  Change pay state true/false (show/hide panle)
         */
        togglePay: (state) =>{
            state.pay = !state.pay;
        },
         /**
         *  Close / Hide pay 
         */
        closePay: (state) =>{
            state.pay = false;
        },
        /**
         *  set state to initial state
         */
        clearOrder: (state) =>{
            state.order = [];
            state.takeOutOption = "";
            state.pay = false;
        },

    },
});


export const {addPizza,removePizza,setTakeOutOption,updatePizzaTopping,updatePizzaSize,togglePay,closePay,clearOrder} = orderSlice.actions;
export default orderSlice.reducer;
