import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./globalStyles";
import { AuthProvider } from "./components/contexts/AuthContext";

import Footer from "./components/Footer/Footer";

import ProductTable from "./components/ProductTable/ProductTable";
// import Signup from "./components/Sign-up/Signup";
// import SignIn from "./components/SignIn/SignIn";

//pages
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/sign-up" exact element={<SignUp />} />
            <Route path="/inventory" exact element={<ProductTable />} />

            {/* <Route path="/" exact element={<Home />} />
            <Route path="/Upload" exact element={<ProductUpload />} />

            <Route path="/signin" exact element={<SignIn />} />
            <Route path="/context" exact element={<ContextTest />} /> */}
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
