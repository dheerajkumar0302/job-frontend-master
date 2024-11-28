import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Components/slices/UserSlice";
import profileReducer from "../Components/slices/ProfileSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer
    }
})