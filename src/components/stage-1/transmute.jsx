import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Fragment } from "react";
import ClearMenu from "../clearmenu";

const styles = theme => ({
  //
});

class Transmute extends React.Component {
  state = {
    base: "65",
    yourScore: "",
    totalItems: "",
    res1: "Chocobun App by Chocobun Fam",
    res2: "v1.0.5"
  };

  handleReset = () => {
    this.setState({
      base: "65",
      yourScore: "",
      totalItems: "",
      res1: "Chocobun App by Chocobun Fam",
      res2: "v1.0.5"
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleTransmute = () => {
    let tScore, pScore, scoreStat;
    let divScore =
      parseFloat(this.state.yourScore) / parseFloat(this.state.totalItems);

    if (this.state.base === "65") {
      tScore = divScore * 71.5 + 28.5;
      tScore = Math.round(tScore);
      pScore = parseFloat(this.state.totalItems) * 0.65;
    } else if (this.state.base === "60") {
      tScore = divScore * 62.5 + 37.5;
      tScore = Math.round(tScore);
      pScore = parseFloat(this.state.totalItems) * 0.6;
    } else if (this.state.base === "50") {
      tScore = divScore * 50 + 50;
      tScore = Math.round(tScore);
      pScore = parseFloat(this.state.totalItems) * 0.5;
    }

    if (parseFloat(this.state.yourScore) >= pScore) {
      scoreStat = "You passed! ";
    } else {
      scoreStat = "You failed! ";
    }

    const res1 = scoreStat + "The passing score is: " + pScore;
    const res2 = "Your transmuted grade is: " + tScore;
    this.setState({ res1, res2 });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className="PositionFixed">
          <div className="ScoreInput">
            <FormControl>
              <InputLabel htmlFor="base-native-simple">Base</InputLabel>
              <Select
                native
                value={this.state.base}
                onChange={this.handleChange("base")}
              >
                <option value={65}>65</option>
                <option value={60}>60</option>
                <option value={50}>50</option>
              </Select>
            </FormControl>
            <TextField
              id="standard-yourScore"
              label="Your Score"
              className={classes.textField}
              value={this.state.yourScore}
              onChange={this.handleChange("yourScore")}
              margin="normal"
              fullWidth
              type="tel"
            />
            <TextField
              id="standard-totalItems"
              label="Total Items"
              className={classes.textField}
              value={this.state.totalItems}
              onChange={this.handleChange("totalItems")}
              margin="normal"
              fullWidth
              type="tel"
            />
          </div>
          <div className="TransmuteButton">
            <Button
              onClick={this.handleTransmute}
              variant="contained"
              color="primary"
            >
              Transmute
            </Button>
          </div>
          <div className="TransmuteResult">
            <p>{this.state.res1}</p>
            <p>{this.state.res2}</p>
          </div>
        </div>
        <ClearMenu resetState={this.handleReset} />
      </Fragment>
    );
  }
}

Transmute.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Transmute);
