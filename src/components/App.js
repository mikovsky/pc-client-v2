import React from "react";
import TopNavbar from "./navigationBars/TopNavbar";
import LeftNavbar from "./navigationBars/LeftNavbar";

const App = ({ children }) => {
  return (
    <React.Fragment>
      <TopNavbar />
      <div className="container-fluid">
        <div className="row">
          <LeftNavbar />
          <main
            role="main"
            className="col-md-9 ml-sm-auto col-lg-10 px-4 bg-dark text-light"
          >
            {children}
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
