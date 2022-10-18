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
          <HeroText>
            We Provide the best POS systems for all Large and Small Businesses
          </HeroText>
          <ButtonWrapper>
            <Link to="signup">
              <Button>Get Started</Button>
            </Link>
            <HeroButton>Find More</HeroButton>
          </ButtonWrapper>
        </Container>
      </HeroVideo>
    </HeroSection>
  );
}

export default Hero;
