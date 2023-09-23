import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "../components/slices/cartSlice";
import notificationSlice from "../components/slices/notificationSlice";

const store = configureStore({
    reducer: {
        additionToCart: cartSlices.reducer,
        ui: notificationSlice.reducer
    }
})

export default store