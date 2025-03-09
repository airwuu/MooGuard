"use client";

import { createContext } from "react";

const TimeContext = createContext<{ time: number; setTime: (time: number) => void } | undefined>(undefined);

export default TimeContext;
