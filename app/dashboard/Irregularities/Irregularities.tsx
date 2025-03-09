/*
irregularities is placed at the top left of the website. it has a title, and 
under that is a scrollable container. In the scrollable container, it will display 
multiple CowData. CowData has name, id, health, sickness confidence, and sickness reason. 
*/ 
"use client"

import { useContext } from "react"; 
import CowContext from "./../Context/CowContext"; 

export default function Irregularities( ) {
  const cows = useContext(CowContext); 

  const printCow = () => {
    console.log(cows);
  };

  return (
    <> 
      <p>{cows[0].name}'s position at time {cows[0].positions[1].time}: 
        ({cows[0].positions[1].x}, {cows[0].positions[1].y})</p>
    </>
  );
}