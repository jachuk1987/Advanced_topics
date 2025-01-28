import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "users",
    initialState: ["Sugar", "Salt", "Rice", "Dall"],
    reducers: {}
})

export default CartSlice.reducer;