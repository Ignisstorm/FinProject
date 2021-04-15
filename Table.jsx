import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, charged, paid) {
  return { name, charged, paid };
}

const rows = [
  createData("Capital Amount", 5270778, 0),
  createData("Interest", 25.70778, 0),
  createData("Cost", 20.52, 0),
  createData("Balance", 25.70778, 25.7203),
  createData("Settlement Fee", 356, 0),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Invoive No: 7477499993</TableCell>
            <TableCell align="right">Charged</TableCell>
            <TableCell align="right">Paid</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.charged}</TableCell>
              <TableCell align="right">{row.paid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <br />
      <Typography variant="body1" gutterBottom color="primary" align="center">
        Settlement Amount R25, 728.30
      </Typography>
    </TableContainer>
  );
}
