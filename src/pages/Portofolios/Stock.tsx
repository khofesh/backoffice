import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";

interface StockProps extends RouteComponentProps {
  stockId?: string;
}
const Stock: FunctionComponent<StockProps> = (props) => {
  return (
    <div>
      <h2>stock {props.stockId}</h2>
    </div>
  );
};

export default Stock;
