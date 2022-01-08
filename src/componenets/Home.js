import React, { useContext } from "react";

import { Newscontext } from "./NewsContext";
import Bigbanner from "./Bigbanner";

import Maindata from "./Maindata";
import Story from "./Story";

const Home = () => {
  return (
    <div>
      <Bigbanner />

      <Maindata />

      <Story />
    </div>
  );
};

export default Home;
