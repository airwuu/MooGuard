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
  reason: string; 
  positions: CowPosition[];
}