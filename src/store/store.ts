// store/index.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer  // Khai báo 1 slide tên là user với giá trị là userReducer được export ở file userSlice
    // Có thể khai báo nhiều slide khác tương tự
  }
});