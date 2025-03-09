/*
irregularities is placed at the top left of the website. it has a title, and 
under that is a scrollable container. In the scrollable container, it will display 
multiple CowData. CowData has name, id, health, sickness confidence, and sickness reason. 
*/ 

"use client"

import { useContext } from "react"; 
import CowContext from "./../Context/CowContext"; 
import CowData from "./CowData";

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"


// make a new cowdata but without position, only 


export default function Irregularities( ) {
  const cows = useContext(CowContext); 

  const printCow = () => {
    console.log(cows);
  };

  const irregularCows = cows.filter(cow => cow.healthStatus === "Dead" || cow.healthStatus === "Ill");

  return (
    <div className="border-1 border-white p-4 w-[380px] h-[300px] font-mono bg-gray-900"> 
      <p className="text-xl font-bold">Irregularities</p>   

      <ScrollArea className="h-[230px] w-[340px] rounded-md border p-4">
        {/* if no irregular cows */}
        {irregularCows.length === 0 && (
          <p className="text-center text-gray-500">Your cows are all healthy!</p>
        )}

        {/* show all irregular cows */}
        {irregularCows.map((cow, index) => (
          <div key={cow.id || index}>
            <CowData cow={cow} />
            {index !== irregularCows.length - 1 && <Separator />}
          </div>
        ))}
      </ScrollArea>

    </div>
  );
}