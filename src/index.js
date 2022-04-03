import { createRoot } from "react-dom/client";
import CounterContainer from "./pages/Counter/containers/CounterContainer";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes/Routes";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
