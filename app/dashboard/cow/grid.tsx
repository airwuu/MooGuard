import { useState } from "react"; 
import Cow from "./cow"; 

// sample cow data generated by chatgpt 

// first bracket: tuple [time, x, y]
// second bracket: list of positions for a cow
// third bracket: list of cows 
const cowData: [number, number, number][][] = [
  [ // first cow
    // first cow's position of the first second
    [0, 50, 50],
    [1, 100, 50],
    [2, 150, 100],
    [3, 200, 150],
  ],
  [
    [0, 20, 100],
    [1, 50, 120],
    [2, 80, 140],
    [3, 110, 160],
  ],
];


// communicates with slider to display the current position of cow
export default function Grid() {
  const [time, setTime] = useState(0); 

  // gets cow's position given: 
    // array of the tuple [time, x, y]
    // time 
    
    // returns the x, y value given the time
  const getCowPos = (cow: [number, number, number][], time: number) => {
    // iterates through all the seconds
    // for int i through all the seconds
      // find when t matches
      // return x y 
    for (let i = 0; i < cow.length; i++) {
      if(cow[i][0] === time) {
        return [cow[i][1], cow[i][2]]; 
      }
      
      return [cow[0][1], cow[0][2]]; 
    }
  }
}