import axios from "axios";
import React, { Component } from "react";
import Nav from "./Nav";
import { Button, Tab, Tabs } from "@blueprintjs/core";
import { Colors } from "@blueprintjs/core";
import RoutineOptions from "./RoutineOptions";
import RoutineView from "./RoutineView";

class Builder extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    days: 3,
  };

  // Grab data from API
  // componentDidMount() {
  //   axios("https://wger.de/api/v2/muscle/")
  //         .then(({ data }) => this.setState({ muscles: data.results }));
  // }

  render() {
    console.log(this.state);
    return (
      <>
        <Nav />
        <RoutineOptions />
        <RoutineView days={this.state.days} />
      </>
    );
  }
}

export default Builder;
