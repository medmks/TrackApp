import BoardPage from "./BoardPage";
import HomePage from "./HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
        <Route path="/MyBoard" element={<BoardPage />} />

    </Routes>
    </BrowserRouter>
    



  );
};
export default App;
