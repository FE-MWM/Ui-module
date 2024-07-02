import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Seonju from "./pages/Seonju";
import Shinae from "./pages/Shinae";
import Sujung from "./pages/Sujung";
import DetailPageShinae from "./pages/DetailPage_Shinae";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seonju" element={<Seonju />} />
        <Route path="/msj" element={<Sujung />} />
        <Route path="/wsa" element={<Shinae />} />
        <Route path="/wsa/detail/:id" element={<DetailPageShinae />} />
      </Routes>
    </div>
  );
}

export default App;
