import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ReactRouter from "./router/ReactRouter";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <ReactRouter />
      </NativeBaseProvider>
    </Provider>
  );
}
