import axios from "axios";
import React, { Component } from "react";
import Nav from "./Nav";
import { Button, Tab, Tabs } from "@blueprintjs/core";
import { Colors } from "@blueprintjs/core";

class Builder extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    clicked: "ng",
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
        <Tabs
          id="TabsExample"
          onChange={(id) => this.setState({ clicked: id })}
          selectedTabId={this.state.clicked}
          vertical
        >
          <Tab
            id="rb"
            title="Routine Builder"
            panel={
              <>
                <h1>About the routine builder</h1>
                <p>Yeah it's like totally sweet dude!</p>
              </>
            }
          />
          <Tab
            id="ex"
            title="Exercises"
            panel={
              <>
                <h1>Information about Exercises</h1>
                <p>Yeah it's like totally sweet dude!</p>
              </>
            }
            panelClassName="ember-panel"
          />
          <Tab
            id="ts"
            title="Training Splits"
            panel={
              <>
                <h1>Explain Training Splits</h1>
                <p>Yeah it's like totally sweet dude!</p>
              </>
            }
          />
          <Tab
            id="mu"
            title="Muscles"
            panel={
              <>
                <h1>List the muscles</h1>
                <p>Yeah it's like totally sweet dude!</p>
              </>
            }
          />
        </Tabs>
      </>
    );
  }
}

export default Builder;
