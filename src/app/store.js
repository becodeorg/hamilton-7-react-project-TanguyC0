import {configureStore} from "@reduxjs/toolkit";
import dataReducer from "../features/post/data";

export const store = configureStore({
    reducer: {
        data: dataReducer,
    },
});
