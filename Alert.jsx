import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { Link } from "@material-ui/core";
import { AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="info">
        <AlertTitle>We recommend an Installment of R1125,610</AlertTitle>
        <Link href="#">Recalculate my Repayment Plan</Link>
      </Alert>
    </div>
  );
}
