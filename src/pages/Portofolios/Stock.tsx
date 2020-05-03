import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
import { DataSheet } from "../../components/tables/DataSheet";

interface StockProps extends RouteComponentProps {
  stockId?: string;
}
const Stock: FunctionComponent<StockProps> = (props) => {
  return (
    <div>
      <h2>stock {props.stockId}</h2>
      <DataSheet />
    </div>
  );
};

export default Stock;
