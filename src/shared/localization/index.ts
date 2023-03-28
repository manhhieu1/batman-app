import LocalizedStrings from "react-native-localization";

export const localStrings = new LocalizedStrings({
  en: {
    noLocationService: "Location Service Not Available",
    logout: "Logout",
    yes: "Yes",
    no: "No",
    cancel: "Cancel",
    areYouSure: "Are you sure?",
    logoutDesc: "You are about to log out, confirm?",
    noInternet: "No Internet Connection",
    account: {
      password: "Password",
      email: 'Email'
    },
    user: {
      name: 'name',
      age: 'age',
      gender: 'gender',
      dob: 'dob'
    },
    bottomBar: {
      home: 'Home',
      search: 'Search',
      notification: 'Notification',
      profile: 'Profile'
    }
  },
  vi: {
    noLocationService: "Location Service Not Available",
    logout: "Đăng xuất",
    login: "Đăng nhập",
    yes: "Đồng ý",
    no: "Hủy",
    cancel: "Hủy",
    areYouSure: "Are you sure?",
    logoutDesc: "You are about to log out, confirm?",
    noInternet: "No Internet Connection",
    account: {
      password: "Mật khẩu",
      email: 'Email'
    },
    user: {
      name: 'Tên',
      age: 'Tuổi',
      gender: 'giới tính',
      dob: 'ngày sinh'
    },
    bottomBar: {
      home: 'Trang chủ',
      search: 'Tìm kiếm',
      notification: 'Thông báo',
      profile: 'Tài khoản'
    }
  },
});
// ? Set the language manually
localStrings.setLanguage("vi");
