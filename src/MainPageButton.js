import React from "react";
import { Link } from "react-router-dom";

const MainPageButton = () => {
  return (   
      <div>
        <Link to="/cards">
          <button className="backButton">Main</button>
        </Link>        
      </div> 
  );
};

export default MainPageButton;
