import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";

class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit" gutterBottom>
            {this.props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
