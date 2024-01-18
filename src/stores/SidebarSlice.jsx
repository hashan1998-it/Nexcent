import { createSlice } from "@reduxjs/toolkit";

const initialState = { isSidebarOpen: false}
export const sidebarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        toggleSidebar(state){
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    }
})