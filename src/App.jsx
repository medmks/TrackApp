import Toolbar from "./Toolbar";
import Header from "./Header";
import Mainpage from "./Mainpage";
import SideBar from "./sideBar";
import { Board } from "./Components/Board";
const App = () => {
  return (
    <div
      className=" "
      style={{ "&::WebkitScrollbar": { width: 0, height: 0 } }}
    >
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
      <Board />
    </div>
  );
};
export default App;
