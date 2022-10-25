import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./globalStyles";
import { AuthProvider } from "./components/contexts/AuthContext";
import Navbar from "./components/NabBar/NavBar";
import Footer from "./components/Footer/Footer";
import ProductTable from "./components/ProductTable/ProductTable";
import ProductUpload from "./components/ProductForm/ProductUpload";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/Sign-up/Signup";

//pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <GlobalStyle />
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/sign-up" exact element={<SignUp />} />
            <Route path="/sign-in" exact element={<SignIn />} />
            <Route path="/inventory" exact element={<ProductTable />} />
            <Route path="/upload" exact element={<ProductUpload />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
