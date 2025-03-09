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

  const clampedX = Math.max(0, Math.min(190, x));
  const clampedY = Math.max(0, Math.min(190, y));

  return (
    <div
      className={`absolute w-4 h-4 rounded-full cursor-pointer transition-transform duration-200
        ${healthStatusColor[healthStatus] || "bg-gray-500"}`}
      onClick={onClick}
      style={{
        left: `${(clampedX / 200) * 100}%`, // Convert x to percentage
        top: `${(clampedY / 200) * 100}%`, // Convert y to percentage
        transform: "translate(-50%, -50%)", // Center the cow dot
      }}
    />
  );
}