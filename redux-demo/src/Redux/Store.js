import { configureStore} from "@reduxjs/toolkit";
import { cartData, socialData, taskManagementData } from "./CartSlice";

export const Store = configureStore({
    reducer: {
        products: cartData,
        subscribes: socialData,
        tasks: taskManagementData,
    }
})