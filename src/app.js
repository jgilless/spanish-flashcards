import React from "react";
import { Router } from "@reach/router";
import Header from "./components/navigation/header";
import Toast from "./components/navigation/toast";
import List from "./pages/list";
import Quiz from "./pages/quiz";
import Review from "./pages/review";

import Dashboard from "./pages/dashboard";

const routes = [
  {
    name: "Colors",
    path: "colors"
  },
  {
    name: "Animals",
    path: "animals"
  }
];

export default function App() {
  let i = 0;
  let routeComponents = new Array(routes.length * 2);
  for (i = 0; i < routes.length; i++) {
    const lk = `/list/${routes[i].path}`;
    const qk = `/quiz/${routes[i].path}`;
    const rk = `/review/${routes[i].path}`;
    routeComponents[3 * i] = <List key={lk} path={lk} data={routes[i].path} />;
    routeComponents[3 * i + 1] = (
      <Quiz key={qk} path={qk} data={routes[i].path} />
    );
    routeComponents[3 * i + 2] = (
      <Review key={rk} path={rk} data={routes[i].path} />
    );
  }
  return (
    <>
      <Header />
      <Router>
        <Dashboard path="/" routes={routes} />
        {routeComponents}
      </Router>
      <Toast />
    </>
  );
}
