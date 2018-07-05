import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import { Paper, Slide, Typography, Button } from "@material-ui/core";

import { ArrowBack } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import { Header } from "../Layouts";

class PostDetail extends Component {
  handleDelete = id => {
    this.props.onDeletePost(id);
    this.props.history.push("/");
  };

  render() {
    let blog = this.props.blogs.filter(
      blog => blog.id === this.props.match.params.id
    )[0];

    return (
      <div>
        <Header title="Blog Detail" />
        <div className="detail-button-wrapper">
          <Slide in={true} direction="right">
            <Button
              variant="fab"
              color="primary"
              aria-label="back"
              onClick={() => this.props.history.push("/")}
            >
              <ArrowBack />
            </Button>
          </Slide>

          <Slide in={true} direction="left">
            <Button
              variant="extendedFab"
              color="secondary"
              aria-label="delete"
              onClick={() => this.handleDelete(blog.id)}
            >
              <DeleteIcon />
              Delete Post
            </Button>
          </Slide>
        </div>
        <Slide direction="up" in={true}>
          <Paper style={{ padding: "10%" }}>
            <Typography variant="display1" gutterBottom>
              {blog.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {blog.category}
            </Typography>
            <Typography variant="title" gutterBottom>
              {blog.content}
            </Typography>
          </Paper>
        </Slide>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs.blogs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeletePost: id => dispatch(actions.deletePost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
