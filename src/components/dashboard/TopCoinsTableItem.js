import React, { Component } from "react";

class TopCoinsTableItem extends Component {
  color = "text-body";

  render24HoursChange = coin => {
    if (coin.changePercent24Hr > 0) {
      this.color = "text-success";
    } else if (coin.changePercent24Hr < 0) {
      this.color = "text-danger";
    }
    return (
      <td className={this.color}>
        {new Intl.NumberFormat("us-US", {
          style: "percent",
          minimumFractionDigits: 2
        }).format(coin.changePercent24Hr / 100)}
      </td>
    );
  };

  renderCurrentPrice = coin => {
    if (coin.priceUsd > 0.01) {
      return (
        <td className={this.color}>
          {new Intl.NumberFormat("us-US", {
            style: "currency",
            currency: "USD",
            currencyDisplay: "symbol"
          }).format(coin.priceUsd)}
        </td>
      );
    } else if (coin.priceUsd < 0.01) {
      return (
        <td className={this.color}>
          {new Intl.NumberFormat("us-US", {
            style: "currency",
            currency: "USD",
            currencyDisplay: "symbol",
            minimumFractionDigits: 5
          }).format(coin.priceUsd)}
        </td>
      );
    }
  };

  render() {
    const { coin } = this.props;
    return (
      <React.Fragment>
        <tr>
          <td>{coin.rank}</td>
          <td>{coin.symbol}</td>
          <td>{coin.name}</td>
          {this.render24HoursChange(coin)}
          {this.renderCurrentPrice(coin)}
        </tr>
      </React.Fragment>
    );
  }
}

export default TopCoinsTableItem;
