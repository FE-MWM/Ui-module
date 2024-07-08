import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
