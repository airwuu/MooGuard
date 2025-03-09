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
      <div className="border-1 border-white p-4 w-[900px] h-[570px] font-mono text-white bg-gray-900">
        <p className="text-xl font-bold">MooGuard</p>      
        <ScrollArea className="h-[500px] w-[600px] rounded-md border p-4">
          {cows.map((cow, index) => (
              <div key={cow.id || index}>
                <CowData cow={cow} />
                {index !== cows.length - 1 && <Separator />}
              </div>
            ))}
        </ScrollArea>
      </div> 
    </>
  );
}