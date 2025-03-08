import React, { createContext, useContext, useState, ReactNode } from "react";

interface CowPosition {
  time: number;
  x: number;
  y: number;
}

interface Cow {
  id: string;
  name: string;
  healthStatus: string;
  confidence: number;
  reason?: string;
  positions: CowPosition[];
}

interface CowContextType {
  cowData: Cow[];
  time: number;
  setTime: (newTime: number) => void;
  selectedCow: Cow | null;
  setSelectedCow: (cow: Cow | null) => void;
}

const CowContext = createContext<CowContextType | undefined>(undefined);

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
];

export function CowProvider({ children }: { children: ReactNode }) {
  const [time, setTime] = useState(0);
  const [selectedCow, setSelectedCow] = useState<Cow | null>(null);

  return (
    <CowContext.Provider value={{ cowData: sampleCowData, time, setTime, selectedCow, setSelectedCow }}>
      {children}
    </CowContext.Provider>
  );
}

