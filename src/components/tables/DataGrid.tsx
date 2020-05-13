import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  date: string,
  shares: number,
  buyPrice: number,
  value: number,
  avePrice: number
) {
  return { date, shares, buyPrice, value, avePrice };
}

const rows = [
  createData("May/4/2020", 400, 2630, 1052000, 2630),
  createData("May/5/2020", 400, 2630, 1052000, 2630),
  createData("May/6/2020", 400, 2620, 1048000, 2626.66),
  createData("May/8/2020", 400, 2590, 1036000, 2617.5),
  createData("May/11/2020", 400, 2620, 1048000, 2618),
];

export const TableGrid: React.FC = (props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Shares</TableCell>
            <TableCell align="right">Buying price</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="right">Average Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.shares}</TableCell>
              <TableCell align="right">{row.buyPrice}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
              <TableCell align="right">{row.avePrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
