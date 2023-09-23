import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    seeCart: false,
}

const cartSlices = createSlice({
    name: 'addToCart',
    initialState,
    reducers: {
        toCart: (state, action) => {

            const newItem = action.payload

            const existingItem = state.cartItems.find((item) => item.id === newItem.id)

            if (existingItem) {
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            } else {
                state.cartItems.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    imgURL: newItem.imgURL,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
        },
        viewCart(state) {
            state.seeCart = !state.seeCart
        },
        removeItem(state, action) {
            const newItem = action.payload

            const existingItem = state.cartItems.find((item) => item.id === newItem.id)

            if (existingItem.quantity === 1) {
                const filteredItem = state.cartItems.filter((item) => item.id !== newItem.id)
                state.cartItems = filteredItem
                if (state.cartItems.length === 0) {
                    state.seeCart = false
                }
            } else {
                existingItem.quantity--
                existingItem.totalPrice -= newItem.price
            }
        },
    }
})

export const { toCart, viewCart, removeItem, addToDummyProducts } = cartSlices.actions

export default cartSlices
