import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const SignInContainer = styled(Container)`
  margin-top: 80px;
  ${Container}
`;

export const SignInWrapper = styled.div`
  max-width: 500px;
  padding: 20px 24px 50px 24px;
  height: 90vh;
  margin: 100px auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 960px) {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  @media (max-width: 768px) {
    border: none;
    padding: 0px 0px;
    box-shadow: none;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const StyledHr = styled.hr`
  color: rgba(0, 0, 0, 0.65);
  margin: auto;
  width: 100%;
`;
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
`;
export const LabelForm = styled.label`
  font-size: 1.5rem;
`;

export const StyledInput = styled.input`
  font-size: 1.2rem;
  height: 50px;
  border: none;
  background-color: #eaf1fb;
  padding: 20px;
  opacity: 0.8;
`;

export const SignInButton = styled.button`
  color: #fff;
  font-size: 1.5rem;
  border: none;
  width: 100%;
  padding: 15px 20px;
  background-color: #0c4577;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ErrorsSignUp = styled.p`
  padding: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  color: red;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Topq = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
export const YesAccount = styled.p`
  font-size: 1.2rem;
`;

export const NavLinksTopQ = styled(Link)`
  font-size: 1.3rem;
  text-decoration: underline;

  &:hover {
    color: #ed0202;
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const StyledTextArea = styled.textarea``;
