import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "products",
    initialState: ["Sugar", "Salt", "Rice", "Dall"],
    reducers: {}
})

export const socialMediaSlice = createSlice({
    name: "subscribes",
    initialState: ["Likes", "Comments", "Share"],
    reducers: {}
})

export const cartData = CartSlice.reducer;
export const socialData = socialMediaSlice.reducer;
