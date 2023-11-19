import React from "react";
import { Board } from "./Components/Board";
import BackGroundBloobs from "./Components/BackGroundBloobs";
const BoardPage = () => {
  return (
    <React.Fragment>
      <BackGroundBloobs />
      <Board />
    </React.Fragment>
  );
};

export default BoardPage;
