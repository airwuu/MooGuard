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
    reason: "Collapsed and has not moved for over a week.",
    positions: [
      { time: 0, x: 90, y: 90 },
      { time: 1, x: 91, y: 90 },
      { time: 2, x: 91, y: 90 },
      { time: 3, x: 91, y: 90 },
      { time: 4, x: 91, y: 90 },
      { time: 5, x: 91, y: 90 },
      { time: 6, x: 91, y: 90 },
      { time: 7, x: 91, y: 90 }
    ],
  },
  {
    id: "2",
    name: "Bartha",
    healthStatus: "Ill",
    confidence: 30,
    reason: "Showing signs of fatigue and slow movements.",
    positions: [
      { time: 0, x: 20, y: 100 },
      { time: 1, x: 25, y: 105 },
      { time: 2, x: 27, y: 107 },
      { time: 3, x: 30, y: 110 },
      { time: 4, x: 32, y: 112 },
      { time: 5, x: 33, y: 113 },
      { time: 6, x: 34, y: 114 },
      { time: 7, x: 35, y: 115 }
    ],
  },
  {
    id: "3",
    name: "Fred",
    healthStatus: "Healthy",
    confidence: 80,
    reason: "Actively grazing and moving around the field.",
    positions: [
      { time: 0, x: 50, y: 50 },
      { time: 1, x: 60, y: 55 },
      { time: 2, x: 70, y: 60 },
      { time: 3, x: 75, y: 70 },
      { time: 4, x: 80, y: 85 },
      { time: 5, x: 85, y: 90 },
      { time: 6, x: 88, y: 95 },
      { time: 7, x: 90, y: 100 }
    ],
  },
  {
    id: "4",
    name: "Mooington",
    healthStatus: "Healthy",
    confidence: 95,
    reason: "Steady movement and consistent feeding observed.",
    positions: [
      { time: 0, x: 120, y: 80 },
      { time: 1, x: 125, y: 90 },
      { time: 2, x: 130, y: 100 },
      { time: 3, x: 140, y: 105 },
      { time: 4, x: 145, y: 110 },
      { time: 5, x: 150, y: 115 },
      { time: 6, x: 155, y: 120 },
      { time: 7, x: 160, y: 125 }
    ],
  },
  {
    id: "5",
    name: "Daisy",
    healthStatus: "Ill",
    confidence: 40,
    reason: "Lethargic and avoiding food, reduced activity detected.",
    positions: [
      { time: 0, x: 100, y: 50 },
      { time: 1, x: 102, y: 52 },
      { time: 2, x: 104, y: 54 },
      { time: 3, x: 106, y: 56 },
      { time: 4, x: 107, y: 57 },
      { time: 5, x: 108, y: 58 },
      { time: 6, x: 108, y: 59 },
      { time: 7, x: 108, y: 60 }
    ],
  },
  {
    id: "6",
    name: "Bessie",
    healthStatus: "Healthy",
    confidence: 90,
    reason: "Active and following herd with normal grazing behavior.",
    positions: [
      { time: 0, x: 30, y: 30 },
      { time: 1, x: 35, y: 35 },
      { time: 2, x: 40, y: 40 },
      { time: 3, x: 50, y: 50 },
      { time: 4, x: 55, y: 55 },
      { time: 5, x: 60, y: 60 },
      { time: 6, x: 65, y: 65 },
      { time: 7, x: 70, y: 70 }
    ],
  },
  {
    id: "7",
    name: "Clarabelle",
    healthStatus: "Healthy",
    confidence: 85,
    reason: "Regular activity and no signs of distress.",
    positions: [
      { time: 0, x: 75, y: 120 },
      { time: 1, x: 78, y: 125 },
      { time: 2, x: 80, y: 130 },
      { time: 3, x: 85, y: 135 },
      { time: 4, x: 90, y: 140 },
      { time: 5, x: 95, y: 145 },
      { time: 6, x: 98, y: 148 },
      { time: 7, x: 100, y: 150 }
    ],
  },
  {
    id: "8",
    name: "Otis",
    healthStatus: "Ill",
    confidence: 50,
    reason: "Moving inconsistently, possibly injured.",
    positions: [
      { time: 0, x: 40, y: 170 },
      { time: 1, x: 42, y: 172 },
      { time: 2, x: 44, y: 174 },
      { time: 3, x: 46, y: 176 },
      { time: 4, x: 48, y: 177 },
      { time: 5, x: 49, y: 178 },
      { time: 6, x: 49, y: 179 },
      { time: 7, x: 50, y: 180 }
    ],
  }, 
  {

    id: "9",
    name: "Moolissa",
    healthStatus: "Healthy",
    confidence: 92,
    reason: "Consistently moving and grazing with the herd.",
    positions: [
      { time: 0, x: 10, y: 60 },
      { time: 1, x: 20, y: 65 },
      { time: 2, x: 30, y: 70 },
      { time: 3, x: 40, y: 75 },
      { time: 4, x: 50, y: 80 },
      { time: 5, x: 60, y: 85 },
      { time: 6, x: 70, y: 90 },
      { time: 7, x: 80, y: 95 }
    ],
  },
  {
    id: "10",
    name: "Sir Moos-a-Lot",
    healthStatus: "Ill",
    confidence: 55,
    reason: "Sporadic movement, appearing fatigued.",
    positions: [
      { time: 0, x: 110, y: 130 },
      { time: 1, x: 115, y: 133 },
      { time: 2, x: 118, y: 136 },
      { time: 3, x: 119, y: 137 },
      { time: 4, x: 120, y: 138 },
      { time: 5, x: 121, y: 138 },
      { time: 6, x: 121, y: 138 },
      { time: 7, x: 121, y: 138 }
    ],
  },
  {
    id: "11",
    name: "Spot",
    healthStatus: "Healthy",
    confidence: 88,
    reason: "Energetic and social, frequently moving with the herd.",
    positions: [
      { time: 0, x: 170, y: 50 },
      { time: 1, x: 165, y: 55 },
      { time: 2, x: 160, y: 60 },
      { time: 3, x: 155, y: 65 },
      { time: 4, x: 150, y: 70 },
      { time: 5, x: 145, y: 75 },
      { time: 6, x: 140, y: 80 },
      { time: 7, x: 135, y: 85 }
    ],
  },
  {
    id: "12",
    name: "Mootilda",
    healthStatus: "Dead",
    confidence: 98,
    reason: "No signs of life, body remains in the same position.",
    positions: [
      { time: 0, x: 80, y: 30 },
      { time: 1, x: 80, y: 30 },
      { time: 2, x: 80, y: 30 },
      { time: 3, x: 80, y: 30 },
      { time: 4, x: 80, y: 30 },
      { time: 5, x: 80, y: 30 },
      { time: 6, x: 80, y: 30 },
      { time: 7, x: 80, y: 30 }
    ],
  },
  {
    id: "13",
    name: "Big Mac",
    healthStatus: "Healthy",
    confidence: 93,
    reason: "High activity, constantly moving to graze.",
    positions: [
      { time: 0, x: 120, y: 170 },
      { time: 1, x: 125, y: 175 },
      { time: 2, x: 130, y: 180 },
      { time: 3, x: 135, y: 185 },
      { time: 4, x: 140, y: 190 },
      { time: 5, x: 145, y: 185 },
      { time: 6, x: 150, y: 180 },
      { time: 7, x: 155, y: 175 }
    ],
}
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

