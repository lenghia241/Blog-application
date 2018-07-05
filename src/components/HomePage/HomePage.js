import React, { Component } from "react";
import { Header, Footer } from "../Layouts";
import AddIcon from "@material-ui/icons/Add";
import { Button, Zoom } from "@material-ui/core";
import BlogItem from "./BlogItem";

import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {
    checked: true
  };
  render() {
    return (
      <div>
        <Header title="My Blog" />
        <Zoom in={true}>
          <Button
            component={Link}
            to="/newpost"
            variant="fab"
            color="secondary"
            style={{ position: "fixed", top: 10, right: 80 }}
          >
            <AddIcon />
          </Button>
        </Zoom>
        <BlogItem checked={this.state.checked} />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
