import React from "react";
import Motivation from "../Motivation/Motivation";
import Profile from "../Profile/Profile";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Strategy from "../Strategy/Strategy";
import useScrollToTop from "../../hooks/useScrollToTop";

const Content = () => {
  useScrollToTop();

  return (
    <div>
      <Profile />
      <Motivation />
      <Experience />
      <Portfolio />
      <Strategy />
    </div>
  );
};

export default Content;
