import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import TopCoinsTableItem from "./TopCoinsTableItem";

class TopCoinsTable extends Component {
  componentDidMount() {
    this.props.fetchTop100Coins();
  }

  renderTableContent = () => {
    const { top100Coins } = this.props;
    if (top100Coins.length > 0) {
      return top100Coins.map(coin => {
        return <TopCoinsTableItem key={coin.id} coin={coin} />;
      });
    } else {
      return (
        <tr>
          <td colSpan="5" className="bg-warning text-dark">
            <i
              style={{ fontSize: "2rem" }}
              className="fas fa-exclamation-triangle"
            />
            <br />
            Failed to load data from external server
          </td>
        </tr>
      );
    }
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
            <tbody>{this.renderTableContent()}</tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    top100Coins: state.externalApiReducer.top100Coins
  };
};

export default connect(
  mapStateToProps,
  actions
)(TopCoinsTable);
