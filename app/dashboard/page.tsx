import Grid from "./Grid/Grid"
import { CowProvider } from "./Context/CowProvider"; 
import Irregularities from "./Irregularities/Irregularities";
import MooGuard from "./MooGuard/MooGuard";
import { SliderComponent } from "./Slider/Slider";

export default function Dashboard({}) {

  return (
    <CowProvider>
      <p className="text-4xl ml-10 mt-5">Dashboard</p>

      <div className="flex justify-between px-10 mt-5">
        {/* left should flex to be as tall as mooguard */}
        {/* also grid should flex to be as large as irregularities */}
        <div className="flex flex-col gap-5 w-1/2">
          <Irregularities />
          <Grid />
        </div>

        <div className="">
          <MooGuard />
        </div>
      </div>

      <div> 
        {/* <Slider /> */}
      </div> 

    </CowProvider>
  )
}