import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/pages/Home";
import ProductUpload from "./components/ProductForm/ProductUpload";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Upload" exact element={<ProductUpload />} />
          <Route path="/sign-up" exact element={<ProductUpload />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
