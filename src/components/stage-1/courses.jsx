import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import IndividualCourse from "../stage-2/individualcourse";
import DialogTitle from "@material-ui/core/DialogTitle";
import SimpleStorage from "react-simple-storage";
import ErrorMessage from "../errormessage";
import ErrorSnackBar from "../errorsnackbar";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

const fabButton = {
  right: 20,
  bottom: 70,
  position: "fixed"
};

class Courses extends React.Component {
  state = {
    courses: [],
    open: false,
    courseName: "",
    editCourse: false,
    activeCourse: "",
    errorOpen: false,
    errorMessage: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, courseName: "" });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleAdd = () => {
    if (
      !this.state.courses.includes(this.state.courseName) &&
      this.state.courseName !== ""
    ) {
      this.setState({
        courses: [...this.state.courses, this.state.courseName]
      });
    } else if (this.state.courses.includes(this.state.courseName)) {
      this.setState({
        errorOpen: true,
        errorMessage: "Course name is already used."
      });
    } else if (this.state.courseName === "") {
      this.setState({
        errorOpen: true,
        errorMessage: "Course name can't be blank."
      });
    }
    this.handleClose();
  };

  handleErrorClosed = () => {
    this.setState({ errorOpen: false });
  };

  handleEditCourse = course => {
    this.setState({ editCourse: true, activeCourse: course });
  };

  handleStopEdit = () => {
    this.setState({ editCourse: false });
  };

  handleDelete = courseName => {
    const tempArray = this.state.courses.filter(
      course => course !== courseName
    );
    this.setState({ courses: tempArray });
    this.handleStopEdit();
  };

  render() {
    const { courses } = this.state;
    if (Number.isInteger(courses)) {
      return <ErrorMessage />;
    } else {
      const listCourses = courses.map(course => (
        <ListItem
          key={course}
          button
          divider
          onClick={this.handleEditCourse.bind(this, course)}
        >
          <ListItemText primary={course} />
        </ListItem>
      ));
      return (
        <Fragment>
          <SimpleStorage
            parent={this}
            prefix="c"
            blacklist={["open", "editCourse"]}
          />
          <List component="nav">{listCourses}</List>
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
            PaperProps={{
              style: {
                backgroundColor: "#fff"
              }
            }}
          >
            <DialogTitle>New Course</DialogTitle>
            <DialogContent>
              <TextField
                onChange={this.handleChange("courseName")}
                autoFocus
                margin="dense"
                label="e.g. Anatomy, Patho"
                fullWidth
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
          <IndividualCourse
            stopEdit={this.handleStopEdit}
            editCourse={this.state.editCourse}
            courseName={this.state.activeCourse}
            deleteCourse={this.handleDelete}
          />
          <ErrorSnackBar
            isOpen={this.state.errorOpen}
            isClosed={this.handleErrorClosed}
            errorMessage={this.state.errorMessage}
          />
        </Fragment>
      );
    }
  }
}

Courses.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Courses);
