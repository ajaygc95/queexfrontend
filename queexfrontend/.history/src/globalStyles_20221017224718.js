import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing:border-box;
    padding:0;
    margin: 0;
    font-family: 'Montserrat', 'sans-serif';
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  } ;
`;

export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: ${({ inverse }) => (inverse ? "$403ae3" : "#fff")};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => {
    margin ? margin : "";
  }};
`;
export const TextWrapper = styled.span``;
export const Section = styled.div``;
export const Column = styled.div``;
export const Row = styled.div``;

export const Button = styled.button``;
