import React from "react";

// simply a circle with x and y

interface CowPointProps {
  x: number;
  y: number;
  onClick: () => void;
}

export default function CowPoint( { x, y, onClick }: CowPointProps) {
  return (
    <div 
      className="absolute w-6 h-6 bg-blue-500 rounded-full cursor-pointer" 
      onClick={onClick} 
      style={{ 
        left: `${x}px`, 
        top: `${y}px`, 
      }}> 
    </div> 
  );
}