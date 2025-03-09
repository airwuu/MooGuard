"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import CowContext from "./CowContext";
import "./CowTypes";


interface CowProviderProps {
  children: ReactNode;
}

export const CowProvider: React.FC<CowProviderProps> = ({ children }) => {
  const [cows, setCows] = useState<Cow[]>([]);

  useEffect(() => {
    const fetchCows = async () => {
      try {
        const response = await fetch("/api/cows");  // Fetch from API
        const data = await response.json();

        // Fill in missing details with defaults
        const formattedCows = data.map((cow: any) => ({
          id: cow.id,
          name: "Unknown",
          healthStatus: "Unknown",
          confidence: 0,
          notes: "No data yet",
          positions: cow.positions
        }));

        setCows(formattedCows);
      } catch (error) {
        console.error("Error fetching cows:", error);
      }
    };

    fetchCows();
  }, []);

  return <CowContext.Provider value={cows}>{children}</CowContext.Provider>;
};
