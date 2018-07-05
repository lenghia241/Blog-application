import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

import { TextField, MenuItem, Button, Slide } from "@material-ui/core";

import Header from "../Layouts/Header";

class NewPost extends Component {
  state = {
    id:
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9),
    title: "",
    category: "",
    content: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // let newId = "_" +
    // Math.random()
    //   .toString(36)
    //   .substr(2, 9);
    // this.setState(prevState => {
    //   return {
    //     ...prevState,
    //     id: newId
    //   };
    // });
    this.props.onAddPost(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <Fragment>
        <Header title="Add A New Blog" />
        <Slide in={true} direction="up">
          <form className="container">
            <TextField
              id="title"
              label="Blog Title"
              value={this.state.title}
              onChange={this.handleChange("title")}
              margin="normal"
              style={{ width: "50%" }}
            />

            <TextField
              id="select-category"
              select
              label="Select Category"
              value={this.state.category}
              onChange={this.handleChange("category")}
              helperText="Please select your currency"
              margin="normal"
              style={{ marginLeft: 50 }}
            >
              {this.props.categories.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="multiline-flexible"
              label="Write New Blog"
              multiline
              fullWidth
              rows="8"
              value={this.state.content}
              onChange={this.handleChange("content")}
              margin="normal"
            />

            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleSubmit}
              style={{ marginRight: 30, marginTop: 30 }}
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{ marginTop: 30 }}
              onClick={() => this.props.history.push("/")}
            >
              Cancel
            </Button>
          </form>
        </Slide>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: data => {
      dispatch(actions.addPost(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);
