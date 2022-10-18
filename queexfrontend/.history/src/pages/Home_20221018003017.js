import React from "react";
import { Content } from "../components/Content/Content";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/NabBar/NavBar";
import 
import { heroOne, heroTwo, heroThree } from "../data/HeroData";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
    </>
  );
}

export default Home;
