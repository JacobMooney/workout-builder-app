import "./routinecol.css";
import ExerciseInfo from "./ExerciseInfo";

function RoutineCol({ names, descriptions }) {
  return (
    <div className="routinecol-col">
      <ExerciseInfo name={''} />
      <ExerciseInfo name={''} />
      <ExerciseInfo name={''} />
      <ExerciseInfo name={''} />
      <ExerciseInfo name={''} />
      <ExerciseInfo name={''} />
      <ExerciseInfo name={''} />
    </div>
  );
}

export default RoutineCol;
