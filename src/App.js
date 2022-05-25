import "./App.css";
import LinearBuffer from "./Components/Loader";
import { NavBar } from "./Components/NavBar";
import { AllRoutes } from "./routes/AllRouter";

function App() {
  return (
    <div className="App">
      <LinearBuffer />
      <AllRoutes />
    </div>
  );
}

export default App;
