import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
