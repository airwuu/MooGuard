import Grid from "./Grid"

export default function GridContainer() {
  return (
    <div className="border-1 border-white p-4 w-[530px] h-[530px] font-mono text-white bg-gray-900">
      <p className="text-xl font-bold">CowGrid</p>   
      <Grid />
    </div>
  );
}