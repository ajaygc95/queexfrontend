import "../../App.css";
import Footer from "../Footer/Footer";

import HeroSection from "../HeroSection/HeroSection";
import ProductTable from "../ProductTable/ProductTable";
import "./Home.css";

function Home() {
  return (
    <>
      <div class="homepage">
        <ProductTable />
        {/* <HeroSection /> */}
      </div>
    </>
  );
}

export default Home;
