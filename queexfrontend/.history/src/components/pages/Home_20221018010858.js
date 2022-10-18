import "../../App.css";
import Footer from "../Footer/Footer";

import HeroSection from "../HeroSection/HeroSection";
import Navbar from "../NabBar/NavBar";
import ProductTable from "../ProductTable/ProductTable";
import "./Home.css";

function Home() {
  return (
    <>
      <div class="homepage">
        <Navbar></Navbar>
        <ProductTable />
        {/* <HeroSection /> */}
      </div>
    </>
  );
}

export default Home;
