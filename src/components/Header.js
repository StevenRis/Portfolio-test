import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Hi, I am </h1>
        <Typed
          className="typed-text"
          strings={["Stanisław", "Web Developer"]}
          typeSpeed={60}
          backSpeed={40}
          loop
          backDelay={2000}
        />
      </div>
    </div>
  );
};

export default Header;
