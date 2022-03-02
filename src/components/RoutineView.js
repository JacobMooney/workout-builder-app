import { SKELETON } from "@blueprintjs/core/lib/esm/common/classes";
import RoutineCol from "./RoutineCol";
import RoutineOptions from "./RoutineOptions";
import "./routineview.css";

function RoutineView({ days, exercises, handleChange }) {

    return (
      <>
        <RoutineOptions handleChange={handleChange}/>
      <div className="routineview-container">
        <RoutineCol descriptions={''} names={''}></RoutineCol>
        <RoutineCol descriptions={''} names={''}></RoutineCol>
        <RoutineCol descriptions={''} names={''}></RoutineCol>
        <RoutineCol descriptions={''} names={''}></RoutineCol>
      </div>
      </>
  );
}

export default RoutineView;
