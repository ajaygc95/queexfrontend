import "../../App.css";

import HeroSection from "../../HHeroSection";
import ProductTable from "../ProductTable";
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
