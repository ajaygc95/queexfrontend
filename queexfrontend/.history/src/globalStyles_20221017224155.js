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
  padding: 0
`;
export const MainHeading = styled.h1``;
export const Heading = styled.h2``;
export const TextWrapper = styled.span``;
export const Section = styled.div``;
export const Column = styled.div``;
export const Row = styled.div``;

export const Button = styled.button``;
