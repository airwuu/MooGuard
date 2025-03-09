/*
CowData has name, id, health, sickness confidence, and sickness reason. 
*/ 
import { useContext } from "react"; 
import CowContext from "./Context/CowContext"; 

export default function CowData({ cow }) {
  const cows = useContext(CowContext); 
  
  return (
    <>
      <p><b>{cow.name}</b></p> 
      <p>{cow.healthStatus}, {cow.confidence}% confidence </p>
      {/* currently, we're just assuming time = 1. replace with time later */}
      <p>Position: ({cow.positions[1].x}, {cow.positions[1].y})</p>
    </> 
  );
}