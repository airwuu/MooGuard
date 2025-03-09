"use client"

import React from "react";

import { useContext } from "react"; 

import CowContext from "./../Context/CowContext"
// simply a circle with x and y

// this is like typescript's version of prop-types
  // but this is put at the top
  // uses interface 
interface CowPointProps {
  x: number;
  y: number;
  healthStatus: string;
  onClick: () => void;
}

export default function CowPoint( { x, y, healthStatus, onClick }: CowPointProps) {
  const cows = useContext(CowContext); 

  const healthStatusColor = {
    Healthy: "bg-green-500",
    Ill: "bg-orange-500",
    Dead: "bg-red-500",
  };

  return (
    <div 
      className={`absolute w-3 h-3 rounded-full cursor-pointer ${
        healthStatusColor[healthStatus] || "bg-gray-500"
      }`}
      onClick={onClick}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}>
    </div> 
  );
}