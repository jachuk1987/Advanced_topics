import { configureStore} from "@reduxjs/toolkit";
import { cartData, socialData } from "./CartSlice";

export const Store = configureStore({
    reducer: {
        products: cartData,
        subscribes: socialData,
    }
})