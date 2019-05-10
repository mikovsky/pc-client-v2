import React from "react";
import PageTitle from "../PageTitle";
import CoinChart from "./CoinChart";
import TopCoinsTable from "./TopCoinsTable";

const Dashboard = () => {
  return (
    <React.Fragment>
      <PageTitle title="Dashboard" />
      <CoinChart />
      <hr />
      <TopCoinsTable />
    </React.Fragment>
  );
};

export default Dashboard;
