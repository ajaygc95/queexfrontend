import { Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Nab />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
