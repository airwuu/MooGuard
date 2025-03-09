/* 
MooGuard is similar to Irregularities. It takes the current time, displays id, name, 
health, and a [click to expand] popup.  
*/

"use client" 

import { useContext } from "react"; 
import CowContext from "./../Context/CowContext"; 
import CowData from "../CowData";

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function MooGuard( ) {
  const cows = useContext(CowContext); 

  return (
    <> 
      {/* put title here later */}

      <ScrollArea className="h-[500px] w-[600px] rounded-md border p-4">
        {cows.map((cow, index) => (
            <div key={cow.id || index}>
              <CowData cow={cow} />
              {index !== cows.length - 1 && <Separator />}
            </div>
          ))}
      </ScrollArea>
    </>
  );
}

/*
irregularities is placed at the top left of the website. it has a title, and 
under that is a scrollable container. In the scrollable container, it will display 
multiple CowData. CowData has name, id, health, sickness confidence, and sickness reason. 
*/ 