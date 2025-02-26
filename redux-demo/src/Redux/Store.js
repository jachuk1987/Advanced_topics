import { configureStore} from "@reduxjs/toolkit";
import { cartData, digitalData, expenseData, inventoryData, libraryData, movieData, quizzData, socialData, taskManagementData, userData } from "./CartSlice";

export const Store = configureStore({
    reducer: {
        products: cartData,
        subscribes: socialData,
        tasks: taskManagementData,
        questions: quizzData,
        roles: userData,
        books: libraryData,
        contacts: digitalData,
        seats: movieData,
        products: inventoryData,
        expenses: expenseData,
    }
})