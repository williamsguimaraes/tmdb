import React from "react";
import Styles from "./App";

import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className={Styles.app}>
      <Header />
      <h2> TMDB </h2>
      <Footer />
      <Outlet />
    </div>
  );
};

export default App;
