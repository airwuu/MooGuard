import Grid from "./Grid/Grid"
import { CowProvider } from "./Context/CowProvider"; 
import Irregularities from "./Irregularities/Irregularities";

export default function Dashboard({}) {

  return (
    <CowProvider>
      <p className="text-4xl ml-10 mt-5">Dashboard</p>

      <div> 
        <Irregularities />
      </div> 

      <div className="py-20"> 
        <Grid />
      </div>
    </CowProvider>
  )
}