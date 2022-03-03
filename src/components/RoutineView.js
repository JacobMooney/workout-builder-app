import { SKELETON } from "@blueprintjs/core/lib/esm/common/classes";
import RoutineCol from "./RoutineCol";
import RoutineOptions from "./RoutineOptions";
import "./routineview.css";

function RoutineView({ days, exercises, handleChange }) {
  return (
    <>
      <RoutineOptions handleChange={handleChange} />
      <div className="routineview-container">{RoutineDays(days)}</div>
    </>
  );
}

function RoutineDays(days) {
  let week = [];
  for (let i = 0; i < days; i++) {
    week.push(<RoutineCol descriptions={""} names={""}></RoutineCol>);
  }
  return week;
}

export default RoutineView;
