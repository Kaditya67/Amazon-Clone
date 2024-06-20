import { configureStore } from "@reduxjs/toolkit";
import nextReducer from "./nextslice";

export const store = configureStore({
    reducer: {
        next: nextReducer,
    },
});

