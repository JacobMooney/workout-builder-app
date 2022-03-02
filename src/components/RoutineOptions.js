import { HTMLSelect } from "@blueprintjs/core";
import "./routineoptions.css";

function RoutineOptions({handleChange}) {
  return (
    <div className="routineoptions-container">
      <HTMLSelect name={"days"} onChange={handleChange}>
        <option>Number of days per week</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
      </HTMLSelect>
      <HTMLSelect name={"split"} onChange={handleChange}>
        <option>Training Split</option>
        <option value={"fullbody"}>Full Body</option>
        <option value={"upperlower"}>Upper/Lower</option>
        <option value={"ppl"}>Push, Pull, Legs</option>
      </HTMLSelect>
    </div>
  );
}

export default RoutineOptions;
