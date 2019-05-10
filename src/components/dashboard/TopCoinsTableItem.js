import React, { Component } from "react";

class TopCoinsTableItem extends Component {
  render24HoursChange = () => {
    return <div>24h change</div>;
  };

  renderCurrentPrice = () => {
    return <div>curr price</div>;
  };

  render() {
    return (
      <React.Fragment>
        <tr>
          <td>coin.rank</td>
          <td>coin.symbol</td>
          <td>coin.name</td>
          {this.render24HoursChange()}
          {this.renderCurrentPrice()}
        </tr>
      </React.Fragment>
    );
  }
}

export default TopCoinsTableItem;
