import React, { Component } from "react";

class CoinChart extends Component {
  render() {
    return (
      <React.Fragment>
        Coin Chart
        <canvas id="lineChart" className="my-4 w-100" />
      </React.Fragment>
    );
  }
}

export default CoinChart;
