import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import TopCoinsTableItem from "./TopCoinsTableItem";

class TopCoinsTable extends Component {
  componentDidMount() {
    if (this.props.authenticated) {
      this.props.fetchTop100Coins();
    }
  }

  renderTableContent = () => {
    const { top100Coins } = this.props;
    if (!this.props.errors.errorMessage) {
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
            {this.props.errors.errorMessage}
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
    top100Coins: state.externalApiReducer.top100Coins,
    errors: state.errorReducer,
    authenticated: state.authReducer.authenticated
  };
};

export default connect(
  mapStateToProps,
  actions
)(TopCoinsTable);
