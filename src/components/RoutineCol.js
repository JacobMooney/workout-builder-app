import "./routinecol.css";
import ExerciseInfo from "./ExerciseInfo";

function RoutineCol({ exercises }) {

  console.log(exercises.barbell && exercises.barbell.filter((item)=>item.category === 13));

  return (
    <div className="routinecol-col">
      {exercises.barbell && (
        <>
          <ExerciseInfo
            key={exercises.barbell[0].id}
            lift={exercises.barbell[0].name}
            category={exercises.barbell[0].category}
          />
          <ExerciseInfo
            key={exercises.barbell[1].id}
            lift={exercises.barbell[1].name}
            category={exercises.barbell[1].category}
          />
          <ExerciseInfo
            key={exercises.barbell[2].id}
            lift={exercises.barbell[2].name}
            category={exercises.barbell[2].category}
          />
        </>
      )}
    </div>
  );
}

export default RoutineCol;
