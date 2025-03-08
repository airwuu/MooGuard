import Cow from "./Cow/Cow"
import Grid from "./Grid/Grid"

import { DataTable } from "./DataTable"
import { CowsTable, columns } from "./Columns"

const totalCows = 100; 
const potentialIll = 5; 

const potentialIllBgColor = potentialIll > 0 ? "bg-red-500" : "bg-green-500"; 

async function getData(): Promise<CowsTable[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      identifier: 429,
      name: "Bertha",
      status: "dead",
      location: "(x, y)",
    },
    // ...
  ]
}

export default async function Dashboard({}) {
  const data = await getData()

  return (
    <>
      <p className="text-4xl ml-10 mt-10">Dashboard</p>

      <div className="flex items-center space-x-4 mt-10"> 
        <p className="ml-25">Total Cows: {totalCows}</p>
        <p className="ml-100">Statistic</p>
        <p className={`${potentialIllBgColor} px-5 py-3 inline-block ml-100 rounded-lg`}>Potential Illnesses: {potentialIll} </p>
      </div> 

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>

      <div className="py-50"> 
        <Grid />
      </div> 
      
      <div> 
        <Cow />
      </div> 
    </>
  )
}