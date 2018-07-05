import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NewPost from "./components/NewPost/NewPost";
import PostDetail from "./components/PostDetail/PostDetail";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/newpost" component={NewPost} />
          <Route path="/post/:id" component={PostDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
