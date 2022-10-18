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

        <ProductTable />
      </div>
    </>
  );
}

export default Home;
