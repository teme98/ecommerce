import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppProvider } from "@toolpad/core/AppProvider";
// Material Ui
const NAVIGATION = {};
const theme = {};
const BRANDING = {};
const router = {};
const AUTHENTICATION = {};
const session = {};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppProvider
        navigation={NAVIGATION}
        theme={theme}
        branding={BRANDING}
        router={router}
        authentication={AUTHENTICATION}
        session={session}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    </Provider>
  </StrictMode>
);
