import RoutineCol from "./RoutineCol";
import "./routineview.css";

function RoutineView({ days }) {
  let someWeird = [
    <div>Temporary Array Data</div>,
    <div>Temporary Array Data</div>,
    <div>Temporary Array Data</div>,
    <div>Temporary Array Data</div>,
  ];

  return (
    <div className="routineview-container">
      <RoutineCol exercises={someWeird}></RoutineCol>
      <RoutineCol exercises={someWeird}></RoutineCol>
      <RoutineCol exercises={someWeird}></RoutineCol>
    </div>
  );
}

export default RoutineView;
