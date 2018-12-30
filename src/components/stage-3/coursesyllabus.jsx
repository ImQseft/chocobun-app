import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DialogTitle from "@material-ui/core/DialogTitle";
import SimpleStorage from "react-simple-storage";
import IndivScore from "./indivscore";
import update from "immutability-helper";
import InputAdornment from "@material-ui/core/InputAdornment";
import ErrorSnackBar from "../errorsnackbar";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

const fabButton = {
  right: 20,
  bottom: 25,
  position: "fixed"
};

function createData(name, tg, wt) {
  return { name, tg, wt };
}

class CourseSyllabus extends React.Component {
  state = {
    allSyllabus: [],
    expanded: null,
    open: false,
    syllabusName: "",
    weight: "",
    errorOpen: false,
    errorMessage: ""
  };

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  clearSyllabus = () => {
    const tempArray = this.state.allSyllabus;
    if (tempArray.length === 0) {
      return true;
    } else {
      this.setState({
        errorOpen: true,
        errorMessage: "Please delete all syllabi before deleting course."
      });
      return false;
    }
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, syllabusName: "", weight: "" });
  };

  handleChangeText = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleGrades = (name, transmutedGrade, weight) => {
    const index = this.state.allSyllabus.findIndex(
      syllabus => syllabus.name === name
    );
    this.setState({
      allSyllabus: update(this.state.allSyllabus, {
        [index]: { tg: { $set: "Transmuted Grade: " + transmutedGrade } }
      })
    });
    this.props.finalGrade(name, (transmutedGrade * weight) / 100);
  };

  handleAdd = () => {
    const { allSyllabus, syllabusName, weight } = this.state;
    const listSyllabus = allSyllabus.map(syllabus => syllabus.name);
    if (
      !listSyllabus.includes(syllabusName) &&
      syllabusName !== "" &&
      /^\d+$/.test(weight)
    ) {
      this.props.addSyllabus(this.props.selectedCourse, syllabusName);
      this.setState({
        allSyllabus: [
          ...allSyllabus,
          createData(syllabusName, "Transmuted Grade: 0", weight)
        ]
      });
    } else if (listSyllabus.includes(syllabusName)) {
      this.setState({
        errorOpen: true,
        errorMessage: "Label already used."
      });
    } else if (syllabusName === "") {
      this.setState({
        errorOpen: true,
        errorMessage: "Label can't be blank."
      });
    } else if (!/^\d+$/.test(weight)) {
      this.setState({
        errorOpen: true,
        errorMessage: "Weight should be a number."
      });
    }
    this.handleClose();
  };

  handleDelete = syllabusName => {
    const tempArray = this.state.allSyllabus.filter(
      syllabus => syllabus.name !== syllabusName
    );
    this.setState({ allSyllabus: tempArray });
  };

  handleErrorClosed = () => {
    this.setState({ errorOpen: false });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    const { allSyllabus } = this.state;
    const listSyllabus = allSyllabus.map(syllabus => (
      <ExpansionPanel
        key={syllabus.name}
        expanded={expanded === "panel" + syllabus.name}
        onChange={this.handleChange("panel" + syllabus.name)}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            {syllabus.name + " (" + syllabus.wt + "%)"}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {syllabus.tg}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="AddSyllabusDiv">
            <IndivScore
              deleteSyllabus={this.handleDelete}
              courseName={this.props.selectedCourse}
              syllabusName={syllabus.name}
              transmutedGrade={this.handleGrades}
              syllabusWeight={syllabus.wt}
              onRef={ref => (this.indivScore = ref)}
            />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ));

    return (
      <Fragment>
        <SimpleStorage
          parent={this}
          prefix={"cs_" + this.props.selectedCourse}
          blacklist={["open", "expanded", "errorOpen", "errorMessage"]}
        />
        <div className={classes.root}>{listSyllabus}</div>
        <Fab
          onClick={this.handleClickOpen}
          style={fabButton}
          size="medium"
          color="primary"
          aria-label="Add"
        >
          <AddIcon />
        </Fab>
        <Dialog
          fullWidth={true}
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>New Syllabus</DialogTitle>
          <DialogContent>
            <TextField
              onChange={this.handleChangeText("syllabusName")}
              autoFocus
              margin="dense"
              label="Label (e.g. Quiz, Attendance)"
              fullWidth
            />
            <TextField
              className="smallTextField"
              onChange={this.handleChangeText("weight")}
              margin="dense"
              label="Weight"
              type="tel"
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>
              }}
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

CourseSyllabus.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CourseSyllabus);
