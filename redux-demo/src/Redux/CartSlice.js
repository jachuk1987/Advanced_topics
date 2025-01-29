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

export const TaskManagementSystem = createSlice({
    name: "tasks",
    initialState: ["PendingTasks", "InProgressTask", "CompletedTask"],
    reducers: {}
})

export const Quizz = createSlice({
    name: "questions",
    initialState: [
        "What is the capital of France?", 
        "Which is the largest planet?", 
        "JavaScript is a programming language."],
    reducers: {}
})

export const UserProfileManagement = createSlice({
    name: "roles",
    initialState: ["Name", "Email", "role"],
    reducers: {}
})

export const LibraryManagementSystem = createSlice({
    name: "books",
    initialState: ["Book Name", "Book Author"],
    reducers: {}
})

export const DigitalAddressBook = createSlice({
    name: "contacts",
    initialState: ["Name", "Email", "Phone"],
    reducers: {}
})

export const MovieTicketBooking = createSlice({
    name: "seats",
    initialState: ["Seat1", "Seat2", "Seat3"],
    reducers: {}
})

export const cartData = CartSlice.reducer;
export const socialData = socialMediaSlice.reducer;
export const taskManagementData = TaskManagementSystem.reducer;
export const quizzData = Quizz.reducer;
export const userData = UserProfileManagement.reducer;
export const libraryData = LibraryManagementSystem.reducer;
export const digitalData = DigitalAddressBook.reducer;
export const movieData = MovieTicketBooking.reducer;