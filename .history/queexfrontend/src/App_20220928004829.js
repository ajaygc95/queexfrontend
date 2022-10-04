import { Router } from "react-router-dom";
import "./App.css";
import Narbar from "./components/Narbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch></Switch>
      </Router>
    </>
  );
}

export default App;
