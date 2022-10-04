import { Router } from "react-router-dom";
import "./App.css";
import Narbar from "./components/Narbar";

function App() {
  return (
    <>
      <Router>
        <Narbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
