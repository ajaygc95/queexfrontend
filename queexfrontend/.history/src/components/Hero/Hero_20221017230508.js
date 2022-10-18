import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyles";

function Hero() {
  return (
    <HeroSection>
      <HeroVideo></HeroVideo>
      <HeroVideo>
        <Container>
          <MainHeading></MainHeading>
          <HeroText></HeroText>
          <ButtonWrapper></ButtonWrapper>
          
        </Container>
      </HeroVideo>
    </HeroSection>
  );
}

export default Hero;
