import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./globalStyles";
import { AuthProvider } from "./components/contexts/AuthContext";
import ContextTest from "./components/ContextTest";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/pages/Home";
import ProductUpload from "./components/ProductForm/ProductUpload";
import Signup from "./components/Sign-up/Signup";
import SignIn from "./components/SignIn/SignIn";

//pages
import { Home as home } from "./pages/Home";
import { SignUp as SignUpPage } from "./pages/SignUp";
// import { Home as home } from "./pages/Home";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Upload" exact element={<ProductUpload />} />
            <Route path="/sign-up" exact element={<Signup />} />
            <Route path="/signin" exact element={<SignIn />} />
            <Route path="/context" exact element={<ContextTest />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
