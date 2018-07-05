import React, { Component } from "react";
import { Slide, Tab, Tabs, AppBar } from "@material-ui/core/";
import * as actions from "../../actions";

import { connect } from "react-redux";

export class Footer extends Component {
  state = {
    category: "all"
  };

  handleChange = (event, value) => {
    this.setState({
      category: value
    });
    this.props.onSortPost(value);
  };

  render() {
    return (
      <Slide in={true} direction="up">
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.category}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            scrollable
            scrollButtons="auto"
          >
            <Tab label="All" value={"all"} />
            {this.props.categories.map((category, index) => (
              <Tab key={index} label={category} value={category} />
            ))}
          </Tabs>
        </AppBar>
      </Slide>
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
    onSortPost: sortBy => {
      dispatch(actions.sortPost(sortBy));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
