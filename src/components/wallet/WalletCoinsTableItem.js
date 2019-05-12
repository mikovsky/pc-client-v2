import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import * as actions from "../../redux/actions";
import { connect } from "react-redux";

class WalletCoinsTableItem extends Component {
  formatToUsd = value => {
    return new Intl.NumberFormat("us-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "symbol"
    }).format(value);
  };

  onDeleteClick = () => {
    const { ownershipCode } = this.props.coin;
    this.props.deleteCoin(ownershipCode);
  };

  render() {
    const { coin } = this.props;
    return (
      <tr>
        <th scope="row">1</th>
        <td>{coin.coinSymbol}</td>
        <td>{coin.coinName}</td>
        <td>{coin.amount}</td>
        <td>{this.formatToUsd(coin.summaryValue)}</td>
        <td>{this.formatToUsd(coin.currentPrice)}</td>
        <td>{this.formatToUsd(coin.priceWhenBought)}</td>
        <td
          className={classnames({
            "text-body": true,
            "text-success": coin.profit > 0,
            "text-danger": coin.profit < 0
          })}
        >
          {this.formatToUsd(coin.profit)}
        </td>
        <td>
          <Link
            to={`/wallet/updateCoin/${coin.ownershipCode}`}
            className="btn btn-outline-light btn-sm"
          >
            Update
          </Link>
        </td>
        <td>
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
