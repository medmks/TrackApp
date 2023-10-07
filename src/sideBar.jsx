import BarChart from "./ChartBar";
import Habbits from "./habbits";
const SideBar = () => {
  return (
    <div className="w-2/4  h-screen border-b border-t border-stone-500 ">
      {/* <BarChart getdata={null} />
        <Habbits acivitiesNames={null} /> */}
      <BarChart />
    </div>
  );
};
export default SideBar;
