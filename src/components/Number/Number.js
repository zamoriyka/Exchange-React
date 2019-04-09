import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    textAlign: "left",
    margin: 0
  }
});

class Number extends Component {
  getNamberValue = name => {
    this.setState({ [name]: name.target.value });
    const numberValue = name.target.value + 10;
    console.log(numberValue);
  };
  render() {
    const { classes } = this.props;
    return (
      <TextField
        id="standard-number"
        label="Number"
        type="number"
        className={classes.textField}
        onChange={this.getNamberValue}
        margin="normal"
      />
    );
  }
}

export default withStyles(styles)(Number);
