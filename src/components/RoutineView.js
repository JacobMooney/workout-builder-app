import { SKELETON } from "@blueprintjs/core/lib/esm/common/classes";
import RoutineCol from "./RoutineCol";
import RoutineOptions from "./RoutineOptions";
import "./routineview.css";

function RoutineView({ days, exercises, handleChange }) {
  return (
    <>
      <RoutineOptions handleChange={handleChange} />
      <div className="routineview-container">{RoutineDays(days, exercises)}</div>
    </>
  );
}

function RoutineDays(days, exercises) {
  let week = [];
  for (let i = 0; i < days; i++) {
    week.push(
      <div>
        <h3>{`Workout ${i + 1}`}</h3>
        <RoutineCol key={i+1} exercises={exercises} descriptions={""} names={""}></RoutineCol>
      </div>
    );
  }
  return week;
}

export default RoutineView;
