import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";
import HomeContainer from "../pages/Home/containers/HomeContainer";
import CountersContainer from "../pages/Counters/containers/CountersContainer";
import FuncCounterContainer from "../pages/CounterFunc/containers/FuncCounterContainer";

export const Router = () => {
  return (
    <Routes>
      {/* <Route path={ROUTE_NAMES.COUNTER_PAGE} element={<CounterContainer />} /> */}
      <Route
        path={ROUTE_NAMES.COUNTER_PAGE}
        element={<FuncCounterContainer />}
      />
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<HomeContainer />} />
      <Route path={ROUTE_NAMES.COUNTERS_PAGE} element={<CountersContainer />} />
    </Routes>
  );
};
