import React, { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { RouteComponentProps } from "@reach/router";

import { DataSheet } from "../../components/tables/DataSheet";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

interface StockProps extends RouteComponentProps {
  stockId?: string;
}

const Stock: FunctionComponent<StockProps> = (props) => {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={8} lg={11}>
          <Paper className={fixedHeightPaper}>
            <h2>stock {props.stockId}</h2>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8} lg={11}>
          <Paper className={classes.paper}>
            <DataSheet />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Stock;
