"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";
import CowContext from "./CowContext"; 
import "./CowTypes"; 


// just change reason to notes
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
  {
    id: "4",
    name: "Mooington",
    healthStatus: "Healthy",
    confidence: 95,
    reason: "Active and eating normally.",
    positions: [
      { time: 0, x: 200, y: 50 },
      { time: 1, x: 210, y: 60 },
      { time: 2, x: 220, y: 70 },
    ],
  },
  {
    id: "5",
    name: "Daisy",
    healthStatus: "Ill",
    confidence: 40,
    reason: "Lethargic, low movement detected.",
    positions: [
      { time: 0, x: 130, y: 130 },
      { time: 1, x: 132, y: 132 },
      { time: 2, x: 134, y: 134 },
    ],
  },
  {
    id: "6",
    name: "Bessie",
    healthStatus: "Dead",
    confidence: 99,
    reason: "No movement in 10 days.",
    positions: [
      { time: 0, x: 60, y: 60 },
      { time: 1, x: 60, y: 60 },
      { time: 2, x: 60, y: 60 },
    ],
  },
  {
    id: "7",
    name: "Clarabelle",
    healthStatus: "Healthy",
    confidence: 85,
    reason: "Good movement patterns and grazing.",
    positions: [
      { time: 0, x: 90, y: 200 },
      { time: 1, x: 100, y: 210 },
      { time: 2, x: 110, y: 220 },
    ],
  },
  {
    id: "8",
    name: "Otis",
    healthStatus: "Ill",
    confidence: 50,
    reason: "Sporadic movement, potential injury.",
    positions: [
      { time: 0, x: 150, y: 180 },
      { time: 1, x: 155, y: 175 },
      { time: 2, x: 160, y: 170 },
    ],
  },
  {
    id: "9",
    name: "Moolissa",
    healthStatus: "Healthy",
    confidence: 90,
    reason: "Consistent activity and feeding.",
    positions: [
      { time: 0, x: 250, y: 250 },
      { time: 1, x: 260, y: 260 },
      { time: 2, x: 270, y: 270 },
    ],
  },
  {
    id: "10",
    name: "Sir Moos-a-Lot",
    healthStatus: "Dead",
    confidence: 98,
    reason: "Collapsed, no movement detected.",
    positions: [
      { time: 0, x: 30, y: 30 },
      { time: 1, x: 30, y: 30 },
      { time: 2, x: 30, y: 30 },
    ],
  },
  {
    id: "11",
    name: "Spot",
    healthStatus: "Ill",
    confidence: 35,
    reason: "Erratic movements, signs of distress.",
    positions: [
      { time: 0, x: 180, y: 90 },
      { time: 1, x: 175, y: 85 },
      { time: 2, x: 170, y: 80 },
    ],
  },
  {
    id: "12",
    name: "Mootilda",
    healthStatus: "Healthy",
    confidence: 88,
    reason: "Good feeding patterns.",
    positions: [
      { time: 0, x: 300, y: 150 },
      { time: 1, x: 310, y: 160 },
      { time: 2, x: 320, y: 170 },
    ],
  },
  {
    id: "13",
    name: "Big Mac",
    healthStatus: "Ill",
    confidence: 45,
    reason: "Reduced activity, potential fever.",
    positions: [
      { time: 0, x: 100, y: 300 },
      { time: 1, x: 105, y: 295 },
      { time: 2, x: 110, y: 290 },
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

