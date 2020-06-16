import React, { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { RouteComponentProps } from "@reach/router";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

import { TableGrid } from "../../components/tables/DataGrid";
import Title from "../../components/Title";
import TradeScenarioDialog from "../../components/stocks/TradeScenarioDialog";

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
  paperTop: {
    display: "grid",
    gridTemplateColumns: "repeat(2, max-content)",
    gridTemplateRows: "1fr",
    columnGap: "0px",
    rowGap: "0px",
  },
  paperTopTitle: {
    gridArea: "1 / 1 / 2 / 2",
    alignSelf: "center",
  },
  paperTopIcon: {
    gridArea: "1 / 2 / 2 / 3",
    alignSelf: "center",
  },
  dialog: {
    width: "100%",
    maxHeight: 600,
  },
}));

interface StockProps extends RouteComponentProps {
  stockId?: string;
}

const Stock: FunctionComponent<StockProps> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={8} lg={11} xl={11}>
          <Paper className={fixedHeightPaper}>
            <Title>Stock Info</Title>
            <h2 style={{ margin: 0 }}>stock {props.stockId}</h2>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8} lg={11} xl={11}>
          <Paper className={classes.paper}>
            <div className={classes.paperTop}>
              <div className={classes.paperTopTitle}>
                <Title>Trade Scenario</Title>
              </div>
              <label
                htmlFor="icon-button-file"
                className={classes.paperTopIcon}
              >
                <IconButton
                  color="primary"
                  aria-label="add scenario"
                  component="span"
                  onClick={handleOpen}
                >
                  <AddIcon />
                </IconButton>
              </label>
            </div>

            <TradeScenarioDialog
              classes={{
                paper: classes.dialog,
              }}
              id="trade-scenario-dialog"
              keepMounted
              open={open}
              onClose={handleClose}
              title="Add New Scenario"
            />

            <TableGrid />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Stock;
