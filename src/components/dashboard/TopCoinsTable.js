import React, { Component } from "react";

class TopCoinsTable extends Component {
  renderCoinsList = () => {
    return <div>Lista xd</div>;
  };

  render() {
    return (
      <React.Fragment>
        <h3 className="mt-3">Best 100 Coins</h3>
        <div className="table-responsive">
          <table className="table table-striped table-hover table-sm text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Coin Symbol</th>
                <th>Coin Name</th>
                <th>% Change 24h</th>
                <th>Current Price</th>
              </tr>
            </thead>
            <tbody>{this.renderCoinsList()}</tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default TopCoinsTable;
