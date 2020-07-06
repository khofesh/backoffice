import React, { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { RouteComponentProps } from "@reach/router";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

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
  margin: {
    marginTop: theme.spacing(1),
  },
}));

interface StockProps extends RouteComponentProps {
  stockId?: string;
}

interface State {
  price: number;
  lot: number;
}

const Stock: FunctionComponent<StockProps> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [values, valuesSet] = React.useState<State>({
    price: 0,
    lot: 0,
  });

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    valuesSet({ ...values, [prop]: event.target.value });
  };

  const handleOpen = () => {
    // reset price and lot to 0
    valuesSet((vals) => ({ ...vals, price: 0, lot: 0 }));

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
                <Title>Average Down Plan</Title>
              </div>
              <label
                htmlFor="icon-button-file"
                className={classes.paperTopIcon}
              >
                <IconButton
                  color="primary"
                  aria-label="add plan"
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
              id="trade-plan-dialog"
              keepMounted
              open={open}
              onClose={handleClose}
              title="Add New Plan"
            >
              <div>
                <FormControl fullWidth className={classes.margin}>
                  <InputLabel htmlFor="standard-adornment-price">
                    Price
                  </InputLabel>
                  <Input
                    id="standard-adornment-price"
                    value={values.price}
                    onChange={handleChange("price")}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl fullWidth className={classes.margin}>
                  <InputLabel htmlFor="standard-adornment-log">Lot</InputLabel>
                  <Input
                    id="standard-adornment-log"
                    value={values.lot}
                    onChange={handleChange("lot")}
                    type="number"
                    startAdornment={
                      <InputAdornment position="start">Lot</InputAdornment>
                    }
                    inputProps={{ min: "0", step: "1" }}
                  />
                </FormControl>
              </div>
            </TradeScenarioDialog>

            <TableGrid
              rows={[
                {
                  id: 1,
                  shares: 400,
                  buyPrice: 2630,
                  value: 1052000,
                  avePrice: 2630,
                },
                {
                  id: 2,
                  shares: 400,
                  buyPrice: 2630,
                  value: 1052000,
                  avePrice: 2630,
                },
                {
                  id: 3,
                  shares: 400,
                  buyPrice: 2620,
                  value: 1048000,
                  avePrice: 2626.66,
                },
                {
                  id: 4,
                  shares: 400,
                  buyPrice: 2590,
                  value: 1036000,
                  avePrice: 2617.5,
                },
                {
                  id: 5,
                  shares: 400,
                  buyPrice: 2620,
                  value: 1048000,
                  avePrice: 2618,
                },
              ]}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Stock;
