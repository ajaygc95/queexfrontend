import React from "react";
import { Content } from "../components/Content/Content";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/NabBar/NavBar";
import Features from "../components/Features/Features";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";
import Carousel

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </>
  );
}

export default Home;
