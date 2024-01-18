import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "./SidebarSlice";


export const store = configureStore({
    reducer: {
        sidebar: sidebarSlice.reducer,

    }
})

export const sidebarActions = sidebarSlice.actions;
