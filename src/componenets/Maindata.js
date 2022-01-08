import React from "react";
import Advertisement from "./Advertisement";
import Foobanner from "./Foobanner";
import Latestarti from "./Latestarti";
import Shortnew from "./Shortnew";
import Toppost from "./Toppost";
import './Maindata.css'

const Maindata = () => {
  return (
    <div>
      <div>
        <Shortnew />
      </div>

      <div className=" mymaindivv">
        <div>
          <Latestarti />
          <Foobanner />
        </div>

        <div className=""   >
          <Advertisement />
          <Toppost />
        </div>
      </div>
    </div>
  );
};

export default Maindata;
