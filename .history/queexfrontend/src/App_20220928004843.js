import { Router } from "react-router-dom";
import "./App.css";
import Narbar from "./components/Narbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' export { second as third } from 'first'>

          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
