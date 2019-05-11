import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import WalletCoinsTableItem from "./WalletCoinsTableItem";

class WalletCoinsTable extends Component {
  componentDidMount() {
    this.props.getCoins();
  }

  renderTableContent = () => {
    const { walletCoins } = this.props;
    if (walletCoins.length > 0) {
      return walletCoins.map(coin => {
        return <WalletCoinsTableItem key={coin.id} coin={coin} />;
      });
    } else {
      return (
        <tr>
          <td colSpan="10">Your wallet is empty!</td>
        </tr>
      );
    }
  };

  render() {
    return (
      <div className="table-responsive">
        <table className="table table-bordered table-hover table-striped table-dark text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Coin Symbol</th>
              <th scope="col">Coin Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Summary Value</th>
              <th scope="col">
                Current Price
                <br />
                (for 1 piece)
              </th>
              <th scope="col">
                Price when bought
                <br />
                (for 1 piece)
              </th>
              <th scope="col">Profit</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{this.renderTableContent()}</tbody>
        </table>
        <Link
          to="/addCoin"
          className="btn btn-block btn-outline-warning btn-sm"
        >
          Create
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    walletCoins: state.walletReducer.walletCoins
  };
};

export default connect(
  mapStateToProps,
  actions
)(WalletCoinsTable);
