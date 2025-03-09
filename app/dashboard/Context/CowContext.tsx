"use client"

import { createContext } from "react";
import "./CowTypes"; 

const CowContext = createContext<Cow[] | undefined>(undefined);
export default CowContext; 