import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Seonju from "./pages/Seonju";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seonju" element={<Seonju />} />
      </Routes>
    </div>
  );
}

export default App;
