import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import classnames from "classnames";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { compose } from "redux";

import PageTitle from "../PageTitle";

class UpdateCoin extends Component {
  componentDidMount() {
    this.props.fetchTop100Coins();
    this.handleInitialize();
  }

  handleInitialize = async () => {
    const { ownershipCode } = this.props.match.params;
    await this.props.fetchCoin(ownershipCode);
    const { walletCoin } = this.props;
    const initData = {
      coinName: walletCoin.coinName,
      amount: walletCoin.amount,
      priceWhenBought: walletCoin.priceWhenBought
    };
    this.props.initialize(initData);
  };

  onSubmit = formProps => {
    const coin = this.props.top100Coins.filter(
      coin => coin.name === formProps.coinName
    )[0];

    const { walletCoin } = this.props;

    walletCoin.amount = formProps.amount;
    walletCoin.priceWhenBought = formProps.priceWhenBought;
    walletCoin.coinName = formProps.coinName;
    walletCoin.coinCode = coin.id;
    walletCoin.coinSymbol = coin.symbol;

    this.props.updateCoin(walletCoin, () => this.props.history.push("/wallet"));
  };

  renderCoinsOption() {
    const { top100Coins } = this.props;
    if (top100Coins.length > 0) {
      return top100Coins.map(coin => {
        return (
          <option key={coin.id} value={coin.name}>
            {coin.name}
          </option>
        );
      });
    } else {
      return <option>Fetching data...</option>;
    }
  }

  render() {
    const { handleSubmit, errors } = this.props;
    return (
      <React.Fragment>
        <PageTitle title="Update Coin" />
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label>Select Coin</label>
            <Field name="coinName" className="form-control" component="select">
              <option />
              {this.renderCoinsOption()}
            </Field>
          </div>
          <div className="form-group">
            <label>Amount</label>
            <Field
              name="amount"
              type="number"
              className={classnames("form-control", {
                "is-invalid": errors.amount
              })}
              min="0"
              step="any"
              component="input"
            />
            {errors.amount && (
              <div className="invalid-feedback text-center">
                {errors.amount}
              </div>
            )}
          </div>
          <div className="form-group">
            <label>Price when coin was bought</label>
            <Field
              name="priceWhenBought"
              type="number"
              className={classnames("form-control", {
                "is-invalid": errors.priceWhenBought
              })}
              min="0"
              step="any"
              component="input"
            />
            {errors.priceWhenBought && (
              <div className="invalid-feedback text-center">
                {errors.priceWhenBought}
              </div>
            )}
          </div>
          <div className="form-group mt-5 text-center">
            <button className="btn btn-block btn-outline-warning float-right">
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    top100Coins: state.externalApiReducer.top100Coins,
    errors: state.errorReducer,
    walletCoin: state.walletReducer.walletCoin
  };
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "updateCoin" })
)(UpdateCoin);
