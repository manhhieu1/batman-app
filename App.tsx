// import "react-native-gesture-handler";
import React from "react";
import { StatusBar, useColorScheme, LogBox } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { isAndroid } from "@freakycoder/react-native-helpers";
/**
 * ? Local Imports
 */
import Navigation from "./src/navigation";
import { store } from "./src/store/store";
import { Provider } from "react-redux";


LogBox.ignoreAllLogs();

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 200);
  }, [scheme, isDarkMode]);

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
