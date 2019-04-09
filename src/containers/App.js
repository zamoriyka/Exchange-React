import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import "./App.css";
import Number from "../components/Number/Number.js";
import Currency from "../components/Currency/Currency.js";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 150,
    textAlign: "center"
  },
  paper: {
    height: 240,
    width: 550,
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {
    padding: 15
  },
  row: { padding: theme.spacing.unit * 0.5 }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disable: true
    };
  }

  handleChange = name => event => {
    this.getState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Paper className={classes.paper}>
          <Typography gutterBottom variant="title" className={classes.title}>
            Exchange
          </Typography>
          <div className={classes.row}>
            <Number />
            <Currency />
          </div>
          <div className={classes.row}>
            <Number />
            <Currency />
          </div>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
