import "./exerciseinfo.css";
import parse from "html-react-parser";

function ExerciseInfo({ name, description }) {
  return (
    <div className="exerciseinfo">
      <div><strong>{'Bench Press 3 sets x 10 reps'}</strong></div>
      <div>{'Catagory / Muscle : Chest'}</div>
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
// Category array
// "results": [
//   {
//       "id": 10,
//       "name": "Abs"
//   },
//   {
//       "id": 8,
//       "name": "Arms"
//   },
//   {
//       "id": 12,
//       "name": "Back"
//   },
//   {
//       "id": 14,
//       "name": "Calves"
//   },
//   {
//       "id": 11,
//       "name": "Chest"
//   },
//   {
//       "id": 9,
//       "name": "Legs"
//   },
//   {
//       "id": 13,
//       "name": "Shoulders"
//   }
// ]
