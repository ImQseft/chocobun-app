import React from "react";
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
import ErrorMessage from "../extra-pages/errormessage";
import ErrorSnackBar from "../extra-pages/errorsnackbar";

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

  resetState = () => {
    this.setState({
      courses: [],
      open: false,
      courseName: "",
      editCourse: false,
      activeCourse: "",
      errorOpen: false,
      errorMessage: ""
    });
  };

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  componentDidUpdate() {
    if (this.props.reset) {
      this.resetState();
      this.props.doneClear();
    }
  }

  hydrateStateWithLocalStorage() {
    for (let state in this.state) {
      const key = "c_" + state;
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
    localStorage.setItem("c_" + state, JSON.stringify(value));
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
      this.state.courseName.trim() !== ""
    ) {
      this.updateState("courses", [
        ...this.state.courses,
        this.state.courseName
      ]);
    } else if (this.state.courses.includes(this.state.courseName)) {
      this.setState({
        errorOpen: true,
        errorMessage: "Course name is already used."
      });
    } else if (this.state.courseName.trim() === "") {
      this.setState({
        errorOpen: true,
        errorMessage: "Course name can't be blank."
      });
    }
    this.handleClose();
  };

  handleDelete = courseName => {
    const tempArray = this.state.courses.filter(
      course => course !== courseName
    );
    this.updateState("courses", tempArray);
    this.handleStopEdit();
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

export default Courses;
