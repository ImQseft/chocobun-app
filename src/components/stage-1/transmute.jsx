import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Fragment } from "react";
import app from "./../../../package.json";

class Transmute extends React.Component {
  state = {
    base: "65",
    yourScore: "",
    totalItems: "",
    res1: "Chocobun App by Chocobun Fam",
    res2: "v" + app.version
  };

  resetState = () => {
    this.setState({
      base: "65",
      yourScore: "",
      totalItems: "",
      res1: "Chocobun App by Chocobun Fam",
      res2: "v" + app.version
    });
  };

  componentDidUpdate() {
    if (this.props.reset) {
      this.resetState();
      this.props.doneClear();
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleTransmute = () => {
    let tScore, pScore, scoreStat;
    let divScore =
      parseFloat(this.state.yourScore) / parseFloat(this.state.totalItems);
    if (this.state.base === "65") {
      tScore = (this.state.yourScore * 100) / this.state.totalItems;
      if (tScore <= 2) {
        //
      } else if (tScore <= 6) {
        tScore = tScore + 1;
      } else if (tScore <= 10) {
        tScore = tScore + 2;
      } else if (tScore <= 14) {
        tScore = tScore + 3;
      } else if (tScore <= 18) {
        tScore = tScore + 4;
      } else if (tScore <= 27) {
        tScore = tScore + 5;
      } else if (tScore <= 36) {
        tScore = tScore + 6;
      } else if (tScore <= 47) {
        tScore = tScore + 7;
      } else if (tScore <= 54) {
        tScore = tScore + 8;
      } else if (tScore <= 63) {
        tScore = tScore + 9;
      } else if (tScore <= 66) {
        tScore = tScore + 10;
      } else if (tScore <= 69) {
        tScore = tScore + 9;
      } else if (tScore <= 72) {
        tScore = tScore + 8;
      } else if (tScore <= 76) {
        tScore = tScore + 7;
      } else if (tScore <= 80) {
        tScore = tScore + 6;
      } else if (tScore <= 83) {
        tScore = tScore + 5;
      } else if (tScore <= 87) {
        tScore = tScore + 4;
      } else if (tScore <= 90) {
        tScore = tScore + 3;
      } else if (tScore <= 94) {
        tScore = tScore + 2;
      } else if (tScore <= 97) {
        tScore = tScore + 1;
      }
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
    return (
      <Fragment>
        <div className="positionFixed">
          <div className="scoreInput">
            <FormControl>
              <InputLabel>Base</InputLabel>
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
              label="Your Score"
              value={this.state.yourScore}
              onChange={this.handleChange("yourScore")}
              margin="normal"
              fullWidth
              type="tel"
            />
            <TextField
              label="Total Items"
              value={this.state.totalItems}
              onChange={this.handleChange("totalItems")}
              margin="normal"
              fullWidth
              type="tel"
            />
          </div>
          <div className="transmuteButton">
            <Button
              onClick={this.handleTransmute}
              variant="contained"
              color="primary"
            >
              Transmute
            </Button>
          </div>
          <div className="transmuteResult">
            <p>{this.state.res1}</p>
            <p>{this.state.res2}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Transmute;
