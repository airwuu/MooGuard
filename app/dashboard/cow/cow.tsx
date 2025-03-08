import React from "react";

interface CowProps {
  x: number;
  y: number; 
}

// this is simply a red circle with an x and y

export default function Cow() {
  return (
    <div 
      className="absolute w-6 h-6 bg-red-500 rounded-full"> 
    </div> 
  );
}