import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/NavBar/Navbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
