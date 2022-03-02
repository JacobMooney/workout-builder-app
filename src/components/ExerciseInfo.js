import "./exerciseinfo.css";
import parse from "html-react-parser";

function ExerciseInfo({ name, description }) {
  return (
    <div className="exerciseinfo">
      <h4>{'Bench Press 3 sets x 10 reps'}</h4>
    </div>
  );
}

export default ExerciseInfo;

//Single Exercise API Info Object
// {
//   "id": 345,
//   "uuid": "c788d643-150a-4ac7-97ef-84643c6419bf",
//   "name": "2 Handed Kettlebell Swing",
//   "exercise_base": 9,
//   "status": "2",
//   "description": "<p>Two Handed Russian Style Kettlebell swing</p>",
//   "creation_date": "2015-08-03",
//   "category": 10,
//   "muscles": [],
//   "muscles_secondary": [],
//   "equipment": [
//   10
//   ],
//   "language": 2,
//   "license": 2,
//   "license_author": "deusinvictus",
//   "variations": []
//   }
