/*
CowData has name, id, health, sickness confidence, and sickness reason. 
*/ 
import { useContext } from "react"; 
import CowContext from "./Context/CowContext"; 
import TimeContext from "./Context/TimeContext";

export default function CowData({ cow }) {
  const cows = useContext(CowContext); 

  const timeContext = useContext(TimeContext);
  const { time, setTime } = timeContext;
  
  return (
    <>
      <p><b>{cow.name}</b></p> 
      <p>{cow.healthStatus}, {cow.confidence}% confidence </p>
      {/* currently, we're just assuming time = 1. replace with time later */}
      <p>Position: ({cow.positions[time].x}, {cow.positions[time].y})</p>
    </> 
  );
}