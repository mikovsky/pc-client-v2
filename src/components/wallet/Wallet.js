import React from "react";

import PageTitle from "../PageTitle";
import WalletCoinsTable from "./WalletCoinsTable";

const Wallet = () => {
  return (
    <React.Fragment>
      <PageTitle title="Wallet" />
      <WalletCoinsTable />
    </React.Fragment>
  );
};

export default Wallet;
