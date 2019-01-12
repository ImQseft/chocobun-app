import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import { Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ErrorSnackBar from "../extra-pages/errorsnackbar";

function createData(name, yscore, titems) {
  return { name, yscore, titems };
}

class IndivScore extends React.Component {
  state = {
    base: "65",
    allScores: [],
    yourScore: "",
    totalItems: "",
    open: false,
    counter: 1,
    errorOpen: false,
    errorMessage: ""
  };

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.allScores !== this.state.allScores ||
      prevState.base !== this.state.base
    ) {
      this.handleComputation();
    }
  }

  hydrateStateWithLocalStorage() {
    for (let state in this.state) {
      const key =
        "is_" +
        this.props.courseName +
        "_" +
        this.props.syllabusName +
        "_" +
        state;
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [state]: value });
        } catch (e) {
          this.setState({ [state]: value });
        }
      }
    }
  }

  updateState = (state, value) => {
    this.setState({ [state]: value });
    localStorage.setItem(
      "is_" +
        this.props.courseName +
        "_" +
        this.props.syllabusName +
        "_" +
        state,
      JSON.stringify(value)
    );
  };

  handleComputation = () => {
    if (this.state.allScores.length > 0) {
      const add = (acc, cur) => parseFloat(acc) + parseFloat(cur);
      const sumYScores = this.state.allScores
        .map(scores => scores.yscore)
        .reduce(add);
      const sumTItems = this.state.allScores
        .map(scores => scores.titems)
        .reduce(add);

      let transmuted = sumYScores / sumTItems;

      const base = this.state.base.toString();
      if (base === "65") {
        transmuted = transmuted * 71.5 + 28.5;
      } else if (base === "60") {
        transmuted = transmuted * 62.5 + 37.5;
      } else if (base === "50") {
        transmuted = transmuted * 50 + 50;
      }

      transmuted = Math.round(transmuted);
      this.props.transmutedGrade(
        this.props.syllabusName,
        transmuted,
        this.props.syllabusWeight
      );
    }
  };

  handleAdd = () => {
    const { yourScore, totalItems } = this.state;
    if (/^\d+$/.test(yourScore) && /^\d+$/.test(totalItems)) {
      this.updateState("counter", this.state.counter + 1);
      this.updateState("allScores", [
        ...this.state.allScores,
        createData(
          this.props.syllabusName + " " + this.state.counter,
          this.state.yourScore,
          this.state.totalItems
        )
      ]);
    } else if (!/^\d+$/.test(yourScore)) {
      this.setState({
        errorOpen: true,
        errorMessage: "Your score should be a number."
      });
    } else if (!/^\d+$/.test(totalItems)) {
      this.setState({
        errorOpen: true,
        errorMessage: "Total items should be a number."
      });
    }
    this.handleClose();
  };

  handleErrorClosed = () => {
    this.setState({ errorOpen: false });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, yourScore: "", totalItems: "" });
  };

  handleChangeText = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleChangeBase = event => {
    this.updateState("base", event.target.value);
  };

  clearScores = () => {
    this.updateState("allScores", []);
    this.updateState("counter", 1);
    this.props.transmutedGrade(
      this.props.syllabusName,
      0,
      this.props.syllabusWeight
    );
  };

  handleDeleteSyllabus = () => {
    const tempArray = this.state.allScores;
    if (tempArray.length === 0) {
      this.props.deleteSyllabus(this.props.syllabusName);
    } else {
      this.setState({
        errorOpen: true,
        errorMessage: "Please clear scores before deleting syllabus."
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Paper className="tableBody">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="right">
                  <Typography>Base</Typography>
                </TableCell>
                <TableCell align="left">
                  <FormControl>
                    <Select
                      native
                      value={this.state.base}
                      onChange={this.handleChangeBase}
                    >
                      <option value={65}>65</option>
                      <option value={60}>60</option>
                      <option value={50}>50</option>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.allScores.map(score => {
                return (
                  <TableRow key={score.name}>
                    <TableCell component="th" scope="row">
                      {score.name}
                    </TableCell>
                    <TableCell align="right">
                      {score.yscore + "/" + score.titems}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div className="tableButtons">
            <Button
              size="small"
              onClick={this.clearScores}
              variant="contained"
              color="primary"
            >
              Clear
            </Button>
            <span className="alignRight">
              <Button
                size="small"
                onClick={this.handleClickOpen}
                variant="contained"
                color="primary"
              >
                Add
              </Button>
            </span>
          </div>
        </Paper>
        <div className="deleteSyllabus">
          <Button
            size="small"
            onClick={this.handleDeleteSyllabus}
            variant="text"
            color="primary"
          >
            Delete Syllabus
          </Button>
        </div>
        <Dialog
          fullWidth={true}
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>{"New " + this.props.syllabusName}</DialogTitle>
          <DialogContent>
            <TextField
              onChange={this.handleChangeText("yourScore")}
              autoFocus
              margin="dense"
              label="Your Score"
              fullWidth
              type="tel"
            />
            <TextField
              onChange={this.handleChangeText("totalItems")}
              margin="dense"
              label="Total Items"
              fullWidth
              type="tel"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleAdd} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
        <ErrorSnackBar
          isOpen={this.state.errorOpen}
          isClosed={this.handleErrorClosed}
          errorMessage={this.state.errorMessage}
        />
      </Fragment>
    );
  }
}

export default IndivScore;
