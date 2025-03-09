"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";
import CowContext from "./CowContext"; 
import "./CowTypes"; 

const sampleCowData: Cow[] = [
  {
    id: "1",
    name: "Bertha",
    healthStatus: "Dead",
    confidence: 97,
    reason: "Has not moved in 7d15h31m",
    positions: [
      { time: 0, x: 50, y: 50 },
      { time: 1, x: 100, y: 50 },
      { time: 2, x: 150, y: 100 },
    ],
  },
  {
    id: "2",
    name: "Bartha",
    healthStatus: "Ill",
    confidence: 30,
    reason: "Irregular eating, overeating",
    positions: [
      { time: 0, x: 20, y: 100 },
      { time: 1, x: 50, y: 120 },
      { time: 2, x: 80, y: 140 },
    ],
  },
  {
    id: "3",
    name: "Fred",
    healthStatus: "Healthy",
    confidence: 80,
    reason: "Grass yum yum.",
    positions: [
      { time: 0, x: 100, y: 150 },
      { time: 1, x: 100, y: 120 },
      { time: 2, x: 100, y: 90 },
    ],
  },
];

interface CowProviderProps {
  children: ReactNode;
}

export const CowProvider: React.FC<CowProviderProps> = ({ children }) => {
  const [cows, setCows] = useState<Cow[]>(sampleCowData);
  
  return (
    <CowContext.Provider value={ cows }>
      {children}
    </CowContext.Provider>
  );
};

