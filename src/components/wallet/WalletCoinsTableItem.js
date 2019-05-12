import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import * as actions from "../../redux/actions";
import { connect } from "react-redux";

class WalletCoinsTableItem extends Component {
  formatToUsd = value => {
    if (value > 0.01) {
      return new Intl.NumberFormat("us-US", {
        style: "currency",
        currency: "USD",
        currencyDisplay: "symbol"
      }).format(value);
    } else if (value < 0.01 && value > 0.0) {
      return new Intl.NumberFormat("us-US", {
        style: "currency",
        currency: "USD",
        currencyDisplay: "symbol",
        minimumFractionDigits: 5
      }).format(value);
    } else {
      return new Intl.NumberFormat("us-US", {
        style: "currency",
        currency: "USD",
        currencyDisplay: "symbol"
      }).format(value);
    }
  };

  onDeleteClick = () => {
    const { ownershipCode } = this.props.coin;
    this.props.deleteCoin(ownershipCode);
  };

  render() {
    const { coin } = this.props;
    return (
      <tr>
        <th scope="row">{this.props.index}</th>
        <td className="align-middle">{coin.coinSymbol}</td>
        <td className="align-middle">{coin.coinName}</td>
        <td className="align-middle">{coin.amount}</td>
        <td className="align-middle">{this.formatToUsd(coin.summaryValue)}</td>
        <td className="align-middle">{this.formatToUsd(coin.currentPrice)}</td>
        <td className="align-middle">
          {this.formatToUsd(coin.priceWhenBought)}
        </td>
        <td
          className={classnames({
            "text-ligth align-middle": coin.profit === 0,
            "text-success align-middle": coin.profit > 0,
            "text-danger align-middle": coin.profit < 0
          })}
        >
          {this.formatToUsd(coin.profit)}
        </td>
        <td className="align-middle">
          <Link
            to={`/wallet/updateCoin/${coin.ownershipCode}`}
            className="btn btn-outline-light btn-sm"
          >
            Update
          </Link>
        </td>
        <td className="align-middle">
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={this.onDeleteClick}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default connect(
  null,
  actions
)(WalletCoinsTableItem);
