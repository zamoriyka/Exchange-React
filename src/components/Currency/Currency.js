import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import axios from "axios";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    textAlign: "left",
    margin: 15
  }
});

class Currency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
      currencyKey: [],
      selectedCurrency: null
    };
  }
  componentDidMount() {
    axios
      .get("https://api.exchangeratesapi.io/latest?base=USD")
      .then(responce => {
        const currencies = responce.data;
        const currencyKey = Object.keys(currencies.rates);
        const currencyValues = Object.values(currencies.rates);
        console.log(currencyValues);
        console.log(currencyKey);
        console.log(currencies.rates.USD);
        this.setState({ currencyKey });
      });
  }

  handleChange = event => {
    this.setState({ selectedCurrency: event.target.value });
    console.log(event.target.value);
    const currSelected = event.target.value;
    console.log(currSelected + " this is the selected curr ");
  };

  render() {
    const { classes } = this.props;

    return (
      <Select
        id="standard-select-currency"
        select
        label="Currency"
        className={classes.textField}
        value={this.state.selectedCurrency}
        onChange={this.handleChange}
        margin="normal"
      >
        <MenuItem value={this.state.currencyKey[0]}>
          {this.state.currencyKey[0]}
        </MenuItem>
        <MenuItem value={this.state.currencyKey[1]}>
          {this.state.currencyKey[1]}
        </MenuItem>
        <MenuItem value={this.state.currencyKey[2]}>
          {this.state.currencyKey[2]}
        </MenuItem>
        <MenuItem value={this.state.currencyKey[3]}>
          {this.state.currencyKey[3]}
        </MenuItem>
        <MenuItem value={this.state.currencyKey[4]}>
          {this.state.currencyKey[4]}
        </MenuItem>
        <MenuItem value={this.state.currencyKey[5]}>
          {this.state.currencyKey[5]}
        </MenuItem>
      </Select>
    );
  }
}

export default withStyles(styles)(Currency);
