import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { tentApi } from "./tentApi";
import { jobApi } from "./jobApi";

export const store = configureStore({
    reducer: {
        [tentApi.reducerPath]: tentApi.reducer,
        [jobApi.reducerPath]: jobApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(tentApi.middleware, jobApi.middleware)
})