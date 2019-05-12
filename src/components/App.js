import React from "react";
import TopNavbar from "./navigationBars/TopNavbar";

const App = ({ children }) => {
  return (
    <React.Fragment>
      <TopNavbar />
      <div className="container-fluid">
        <div className="row">
          <main
            role="main"
            className="col-md-12 ml-sm-auto col-lg-12 px-4 bg-dark text-light"
          >
            {children}
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
