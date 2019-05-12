import React from "react";
import { Link } from "react-router-dom";

import PageTitle from "../PageTitle";
import WalletCoinsTable from "./WalletCoinsTable";

const Wallet = () => {
  return (
    <React.Fragment>
      <PageTitle title="Wallet" />
      <div className="table-responsive">
        <WalletCoinsTable />
        <Link
          to="/wallet/addCoin"
          className="btn btn-block btn-outline-warning btn-sm"
        >
          Add Coin
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Wallet;
