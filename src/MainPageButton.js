import React from "react";
import { useHistory } from "react-router-dom"

const MainPageButton = ({ history }) => {
  // const history = useHistory()
  const handleClick = () => {
      history.push("/");
  };
  return (
    <div className="backButton">
      <button onClick={() => handleClick()}>Main</button>
    </div>
  );
};

export default MainPageButton;
