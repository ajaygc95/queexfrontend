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
      <HeroVideo src="./assets/hero.mp4" autoPlay muted />

      <Container>
        <MainHeading>All in one POS system </MainHeading>
        <HeroText>
          We Provide the best POS System, Inventory System, Built In Delivery
          System , Automated Performance Measurement System to excel your
          business needs.
        </HeroText>
        <ButtonWrapper>
          <Link to="/sign-up">
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
}

export default Hero;
