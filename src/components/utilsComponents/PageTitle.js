import React from "react";

const PageTitle = props => {
  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h3>{props.title}</h3>
    </div>
  );
};

export default PageTitle;
