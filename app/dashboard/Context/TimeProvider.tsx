"use client";

import { useState } from "react";
import TimeContext from "./TimeContext";

export default function TimeProvider({ children }: { children: React.ReactNode }) {
  const [time, setTime] = useState(0);

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      {children}
    </TimeContext.Provider>
  );
}
