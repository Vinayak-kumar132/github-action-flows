import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";


function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Navbar always visible */}
      <Navbar />

      {/* Page Content */}
      <div className="mx-auto w-full  py-6 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />

         
        </Routes>
      </div>
    </div>
  );
}

export default App;
