import React from "react";

// simply a circle with x and y

// this is like typescript's version of prop-types
  // but this is put at the top
  // uses interface 
interface CowPointProps {
  x: number;
  y: number;
  onClick: () => void;
}

export default function CowPoint( { x, y, onClick }: CowPointProps) {
  return (
    <div 
      className="absolute w-3 h-3 bg-blue-500 rounded-full cursor-pointer" 
      onClick={onClick} 
      style={{ 
        left: `${x}px`, 
        top: `${y}px`, 
      }}> 
    </div> 
  );
}