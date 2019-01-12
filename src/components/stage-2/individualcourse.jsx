import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import CourseSyllabus from "../stage-3/coursesyllabus";
import { Fragment } from "react";
import Chip from "@material-ui/core/Chip";
import update from "immutability-helper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function createData(name, syllabus, grade) {
  return { name, syllabus, grade };
}

function computeValue(listTG) {
  if (listTG.length > 0) {
    const add = (acc, cur) => parseFloat(acc) + parseFloat(cur);
    let finalGrade = listTG.reduce(add);
    finalGrade = Math.round(finalGrade * 100) / 100;
    return finalGrade;
  } else return 0;
}

class IndividualCourse extends React.Component {
  state = {
    courseGrades: []
  };

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    for (let state in this.state) {
      const key = "ic_" + state;
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
    localStorage.setItem("ic_" + state, JSON.stringify(value));
  };

  handleGrades = (syllabus, transG) => {
    const { courseGrades } = this.state;
    const index = courseGrades.findIndex(
      course =>
        course.name === this.props.courseName && course.syllabus === syllabus
    );

    this.updateState(
      "courseGrades",
      update(courseGrades, {
        [index]: { grade: { $set: transG } }
      })
    );
  };

  handleAdd = (course, syllabus) => {
    this.updateState("courseGrades", [
      ...this.state.courseGrades,
      createData(course, syllabus, "0")
    ]);
  };

  handleDeleteCourse = () => {
    if (this.courseSyllabus.clearSyllabus()) {
      this.props.deleteCourse(this.props.courseName);
    }
  };

  render() {
    const { classes } = this.props;
    const listTG = this.state.courseGrades.map(tg => {
      if (tg.name === this.props.courseName) {
        return tg.grade;
      } else return 0;
    });
    const finalGrade = computeValue(listTG);

    return (
      <Fragment>
        <Dialog
          fullScreen
          open={this.props.editCourse}
          onClose={this.props.stopEdit}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                {this.props.courseName}
              </Typography>
              <IconButton onClick={this.handleDeleteCourse} color="inherit">
                <DeleteIcon />
              </IconButton>
              <Button onClick={this.props.stopEdit} color="inherit">
                DONE
              </Button>
            </Toolbar>
          </AppBar>
          <div>
            <CourseSyllabus
              finalGrade={this.handleGrades}
              selectedCourse={this.props.courseName}
              addSyllabus={this.handleAdd}
              onRef={ref => (this.courseSyllabus = ref)}
            />
            <Chip
              className="finalSGrade"
              label={"Final Grade: " + finalGrade}
              color="primary"
            />
          </div>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(IndividualCourse);
