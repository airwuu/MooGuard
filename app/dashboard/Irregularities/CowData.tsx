/*
CowData has name, id, health, sickness confidence, and sickness reason. 
*/ 
import { useContext } from "react"; 
import CowContext from "../Context/CowContext"; 
import TimeContext from "../Context/TimeContext";

export default function CowData({ cow }) {
  const cows = useContext(CowContext); 

  const timeContext = useContext(TimeContext);
  const { time, setTime } = timeContext;
  
  const healthStatusColor = {
    Healthy: "text-green-500",
    Ill: "text-orange-500",
    Dead: "text-red-500"
  };

  return (
    <>
      <p><b>{cow.name}</b></p> 
      <div className="flex flex-row"> 
        <p className={healthStatusColor[cow.healthStatus]}>{cow.healthStatus}</p>
        <p>, {cow.confidence}% confidence </p> 
      </div>
      {/* currently, we're just assuming time = 1. replace with time later */}
    </> 
  );
}