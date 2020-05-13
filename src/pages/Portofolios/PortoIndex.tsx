import React, { FunctionComponent } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import Grid from "@material-ui/core/Grid";

const InvoicesIndex: FunctionComponent<RouteComponentProps> = () => (
  <Grid container spacing={3} justify="center">
    <Grid item xs={12} md={8} lg={11} xl={11}>
      <div style={{ marginBottom: 5 }}>
        <Link to="123">stock 1</Link> <Link to="124">stock 2</Link>
      </div>
      <p>Maybe put some pretty graphs here or something.</p>
    </Grid>
  </Grid>
);

export default InvoicesIndex;
