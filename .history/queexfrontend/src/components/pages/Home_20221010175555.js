import "../../App.css";

import HeroSection from "../HeroSection";
import ProductTable from "../Product";
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