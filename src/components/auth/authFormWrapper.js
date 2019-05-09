import React, { Component } from "react";

export default ChildComponentWithForm => {
  class ComposedComponentWithForm extends Component {
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5 pb-5">
              <div className="card card-signin">
                <div className="card-body">
                  <ChildComponentWithForm {...this.props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  return ComposedComponentWithForm;
};
