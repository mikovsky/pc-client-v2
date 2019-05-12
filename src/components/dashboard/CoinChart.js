import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

class CoinChart extends Component {
  chartObject = {
    data: {
      labels: [],
      datasets: [
        {
          label: "Bitcoin",
          backgroundColor: "rgba(238, 199, 41, 0.1",
          borderColor: "rgba(238, 199, 41, 1",
          data: []
        }
      ]
    }
  };

  componentDidMount() {
    this.props.fetchCoinHistory("bitcoin");
  }

  supplyChartData = () => {
    this.setLabels();
    this.setData();
  };

  setLabels = () => {
    const dates = this.props.coinHistory.map(coin => {
      return new Intl.DateTimeFormat("en-GB", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit"
      }).format(Date.parse(coin.date));
    });
    this.chartObject.data.labels = dates;
  };

  setData = () => {
    const prices = this.props.coinHistory.map(coin => {
      return coin.priceUsd;
    });
    this.chartObject.data.datasets[0].data = prices;
  };

  render() {
    this.supplyChartData();
    return (
      <div style={{ position: "relative", width: "100%", heigth: "100%" }}>
        <Line
          options={{
            responsive: true
          }}
          data={this.chartObject.data}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    coinHistory: state.externalApiReducer.coinHistory
  };
};

export default connect(
  mapStateToProps,
  actions
)(CoinChart);
