import BoardPage from "./BoardPage";
import Dashboard from "./Dashboard";
import Toolbar from "./Toolbar";
import HomePage from "./HomePage";
import Header from "./Header";
// import Dashboard from "./Dashboard";
import {
  // createBrowserRouter,
  BrowserRouter,
  // RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./Navbar";
const App = () => {
  // const Layout = () => {
  //   return (
  //     <div className=" flex  ">
  //       <Toolbar>
  //         <div className="w-full">
  //           <HomePage />
  //         </div>
  //       </Toolbar>
  //     </div>
  //   );
  // };
  return (
    <BrowserRouter>
      <div className=" flex ">
        <Toolbar />
        <div className=" bg-transparent border-r border-gray-700  mx-4  h-screen w-[20em]"></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/board" element={<BoardPage />} />
          {/* <Route path="/dash" element={<Dashboard />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Dashboard />,
  //       },
  //       {
  //         path: "/board",
  //         element: <BoardPage />,
  //       },

  //     ],
  //   },
  //   {
  //     path: "/board",
  //     element: <BoardPage />,
  //   },
  // ]);

  // return <RouterProvider router={router} />;
};

export default App;
