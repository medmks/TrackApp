import Toolbar from "./Toolbar";
import Header from "./Header";
import Mainpage from "./Mainpage";
import SideBar from "./sideBar";

const App = () => {
  return (
    <div className="">
      <div className="  flex flex-row ">
        <Toolbar />
        <div className="flex flex-col w-full">
          <Header />
          <div className="flex flex-row">
            <Mainpage />
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
