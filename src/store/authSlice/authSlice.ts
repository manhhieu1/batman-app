// store/authSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo state cho slice, có thể kèm giá trị mặc định ban đầu
const initialState = {
  token: ""  // State username với giá trị mặc định là "Guest"
  // Có thể khai báo nhiều state khác nữa
};

// Cấu hình slice
export const authSlice = createSlice({
  name: "auth",  // Tên của slice, mỗi slice đặt 1 tên khác nhau để phân biệt
  initialState,
  // Reducers chứa các hàm xử lý cập nhật state
  reducers: {
    updateToken: (state: any, action) => {
      // Cập nhật state username với giá trị truyền vào qua action (action.payload)
      // Chạy thử console.log(action) để xem chi tiết giá trị action truyền vàos
      state.token = action.payload;
    }
  }
});

// Export action ra để sử dụng cho tiện.
export const { updateToken } = authSlice.actions;

// Action là 1 hàm trả về object dạng {type, payload}, chạy thử console.log(updateUsername()) để xem chi tiết

// Hàm giúp lấy ra state mong muốn.
// Hàm này có 1 tham số là root state là toàn bộ state trong store, chạy thử console.log(state) trong nội dung hàm để xem chi tiết
export const selectToken = (state: any) => state.auth.token;

// Export reducer để nhúng vào Store
export default authSlice.reducer;