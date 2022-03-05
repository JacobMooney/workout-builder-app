import "./exerciseinfo.css";
import parse from "html-react-parser";

function ExerciseInfo({ category, lift }) {
  return (
    <div className="exerciseinfo">
      <div>
        <strong>{lift}</strong>
      </div>
      <div>{`Catagory / Muscle : ${findBodyPart(category)}`}</div>
    </div>
  );
}

function findBodyPart(category) {
  let categories = [
    {
      id: 10,
      name: "Abs",
    },
    {
      id: 8,
      name: "Arms",
    },
    {
      id: 12,
      name: "Back",
    },
    {
      id: 14,
      name: "Calves",
    },
    {
      id: 11,
      name: "Chest",
    },
    {
      id: 9,
      name: "Legs",
    },
    {
      id: 13,
      name: "Shoulders",
    },
  ];
  let bodypart = categories.find((item) => item.id === category);
  return bodypart.name;
}

export default ExerciseInfo;
