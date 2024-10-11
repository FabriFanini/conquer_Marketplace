import React from "react";
import AddNFTComponent from "../components/admin/AddNFT";
import SetNFTPriceComponent from "../components/admin/SetNFTPrice";
import SetRewardTokensComponent from "../components/admin/SetRewardTokens";
import WithdrawComponent from "../components/admin/WithdrawComponents";

const AdminPage = () => {
  return (
    <>
      <AddNFTComponent />
      <SetNFTPriceComponent />
      <SetRewardTokensComponent />
      <WithdrawComponent />
    </>
  );
};

export default AdminPage;
