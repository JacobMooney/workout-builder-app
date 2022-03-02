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
    this.state = {
      days: 3,
      split: "fullbody",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  // Grab data from API
  componentDidMount() {
    axios("https://wger.de/api/v2/exercise/?format=json&language=2").then(
      ({ data }) => this.setState({ exercises: data.results })
    );
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Nav />
        <RoutineView
          handleChange={this.handleChange}
          exercises={this.state.exercises ? this.state.exercises : []}
          days={this.state.days}
        />
      </>
    );
  }
}

export default Builder;
