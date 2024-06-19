import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Seonju from "./pages/Seonju";
import Shinae from "./pages/Shinae";
import Sujung from "./pages/Sujung";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seonju" element={<Seonju />} />
        <Route path="/msj" element={<Sujung />} />
        <Route path="/wsa" element={<Shinae />} />
      </Routes>
    </div>
  );
}

export default App;
