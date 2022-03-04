import "./routinecol.css";
import ExerciseInfo from "./ExerciseInfo";

function RoutineCol({ exercises }) {
  // console.log('Inside the col', exercises.arms);
  return (
    <div className="routinecol-col">
      {/* {exercises && <ExerciseInfo bodypart={exercises[0][0].name} name={''} />} */}
    </div>
  );
}

export default RoutineCol;
