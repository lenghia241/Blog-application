import React, { Component } from "react";
import { Slide, Paper, List, ListItem, ListItemText } from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

export class BlogItem extends Component {
  render() {
    const { blogs, seachText } = this.props;
    let blogsFiltered = [];

    seachText === "all"
      ? (blogsFiltered = blogs)
      : (blogsFiltered = blogs.filter(blog => blog.category === seachText));

    return (
      <Paper style={styles.Paper}>
        <Slide
          in={this.props.checked}
          direction="right"
          mountOnEnter
          unmountOnExit
        >
          <List component="nav">
            {blogsFiltered.map((blog, index) => {
              return (
                <ListItem
                  button
                  key={index}
                  component={Link}
                  to={`/post/${blog.id}`}
                >
                  <ListItemText
                    primary={blog.title}
                    secondary={
                      blog.category.charAt(0).toUpperCase() +
                      blog.category.slice(1)
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Slide>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs.blogs,
    seachText: state.blogs.searchText
  };
};

// const mapDispatchToProps = (dispatch, props) => {
//   return {
//     onSubmitInfo: data => {
//       dispatch(actions.submitInfo(data));
//     }
//   };
// };

export default connect(
  mapStateToProps,
  null
)(BlogItem);
