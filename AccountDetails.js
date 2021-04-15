import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "./ButtonGroup";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
    width: "25ch",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Insert Note");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom align="left">
        Account Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-full-width"
                label="Name"
                style={{ margin: 8 }}
                placeholder="Daniel D Somolekae"
                helperText="Name and Surname"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="standard-full-width"
                label="Phone"
                style={{ margin: 8 }}
                placeholder="+72 82 622 2222"
                helperText="+72"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="standard-full-width"
                label="Debit Local Time"
                style={{ margin: 8 }}
                placeholder="Wednesday, 14 April 2021, 13:49"
                helperText="Time zone in South Africa (GMT+2)"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id="standard-full-width"
                label="ID Number"
                style={{ margin: 8 }}
                placeholder="5602022345678"
                helperText="13 digit number"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button variant="contained" color="Primary">
                Save
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <TextField
              id="standard-full-width"
              label="Miranda"
              style={{ margin: 8 }}
              helperText="Select Miranda"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            
            <TextField
              id="standard-multiline-flexible"
              label="Note"
              multiline
              rowsMax={4}
              placeholder="Note"
              fullWidth
              value={value}
              onChange={handleChange}
            />
            <Box mt={5}>
              <ButtonGroup />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
