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
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // // Grab data from API
  componentDidMount() {
    let muscleData = [
      "https://wger.de/api/v2/exercise/?format=json&language=2&limit=1000&equipment=1",
      "https://wger.de/api/v2/exercise/?format=json&language=2&limit=1000&equipment=2",
      "https://wger.de/api/v2/exercise/?format=json&language=2&limit=1000&equipment=3",
      "https://wger.de/api/v2/exercise/?format=json&language=2&limit=1000&equipment=4",
      "https://wger.de/api/v2/exercise/?format=json&language=2&limit=1000&equipment=5",
      "https://wger.de/api/v2/exercise/?format=json&language=2&limit=1000&equipment=6",
      "https://wger.de/api/v2/exercise/?format=json&language=2&limit=1000&equipment=7",
      "https://wger.de/api/v2/exercise/?format=json&language=2&limit=1000&equipment=8",
      "https://wger.de/api/v2/exercise/?format=json&language=2&limit=1000&equipment=9",
      "https://wger.de/api/v2/exercise/?format=json&language=2&limit=1000&equipment=10",
    ];

    axios.all(muscleData.map((endpoint) => axios.get(endpoint))).then(
      axios.spread((...responses) => {
        const barbell = responses[0].data.results;
        const swissbar = responses[1].data.results;
        const dumbbell = responses[2].data.results;
        const gymmat = responses[3].data.results;
        const swissball = responses[4].data.results;
        const pullupbar = responses[5].data.results;
        const bodyweight = responses[6].data.results;
        const bench = responses[7].data.results;
        const inclinebench = responses[8].data.results;
        const kettlebell = responses[9].data.results;
        this.setState({
          exercises: {
            barbell: barbell,
            swissbar: swissbar,
            dumbbell: dumbbell,
            gymmat: gymmat,
            swissball: swissball,
            pullupbar: pullupbar,
            bodyweight: bodyweight,
            bench: bench,
            inclinebench: inclinebench,
            kettlebell: kettlebell,
          },
        });
      })
    );
  }

  // generateRoutine(days, ...exercises) {
  //   return (
  //     <React.Fragment>
  //       <li>
  //         <h5>{compounds[days % compounds.length]}:</h5> 5 Sets x 5 Reps
  //       </li>
  //       <li>
  //         <h5>{compounds[(days + 2) % compounds.length]}:</h5> 5 Sets x 5 Reps
  //       </li>
  //       <li>
  //         <h5>{legs.exercises[days % legs.exercises.length]}:</h5> 3 Sets x 10
  //         Reps
  //       </li>
  //       <li>
  //         <h5>{pull.exercises[[days % pull.exercises.length]]}:</h5> 3 Sets x 10
  //         Reps
  //       </li>
  //       <li>
  //         <h5>{push.exercises[[days % push.exercises.length]]}:</h5> 3 Sets x 10
  //         Reps
  //       </li>
  //       <li>
  //         <h5>{abdominals.exercises[days % abdominals.exercises.length]}:</h5> 3
  //         Sets x 25-30 Reps
  //       </li>
  //     </React.Fragment>
  //   );
  // }

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
