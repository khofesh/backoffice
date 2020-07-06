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

interface RowData {
  id: number;
  shares: number;
  buyPrice: number;
  value: number;
  avePrice: number;
}

interface TableGridProps {
  rows?: RowData[];
}

export const TableGrid: React.FC<TableGridProps> = ({ rows }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Shares</TableCell>
            <TableCell align="right">Buying price</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="right">Average Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            ? rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="right">{row.shares}</TableCell>
                  <TableCell align="right">{row.buyPrice}</TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                  <TableCell align="right">{row.avePrice}</TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
