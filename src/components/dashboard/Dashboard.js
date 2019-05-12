import React, { Component } from "react";
import PageTitle from "../PageTitle";
import CoinChart from "./CoinChart";
import TopCoinsTable from "./TopCoinsTable";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <PageTitle title="Dashboard" />
        <CoinChart />
        <hr />
        <TopCoinsTable />
      </React.Fragment>
    );
  }
}

export default Dashboard;
