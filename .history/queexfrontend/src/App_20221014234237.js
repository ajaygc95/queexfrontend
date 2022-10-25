import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContextTest from "./components/ContextTest";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/pages/Home";
import ProductUpload from "./components/ProductForm/ProductUpload";
import Signup from "./components/Sign-up/Signup";
import { MovieProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <MovieProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Upload" exact element={<ProductUpload />} />
            <Route path="/sign-up" exact element={<Signup />} />
            <Route path="/context" exact element={<ContextTest />} />
          </Routes>
          <Footer />
        </Router>
      </MovieProvider>
    </>
  );
}

export default App;
