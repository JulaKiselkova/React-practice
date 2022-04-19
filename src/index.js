import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { configureStore } from "./store/configureStore";
import { Provider } from "react-redux";

import MainLayout from "./components/MainLayout";
import { Router } from "./Routes/Routes";

const container = document.getElementById("root");
const root = createRoot(container);

const store = configureStore();

root.render(
    <BrowserRouter>
    <Provider store={store}>
      <MainLayout>
        <Router />
      </MainLayout>
      </Provider>
    </BrowserRouter>
);
