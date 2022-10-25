import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const FromContainer = styled(Container)`
  margin-top: 80px;
  ${Container}
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  align-items: center;
  justify-content: center;
`;

export const StyledHr = styled.hr`
  color: rgba(0, 0, 0, 0.65);
  width: 90%;
`;
export const FormItem = styled.div`
  border: 1px solid gray;
  padding: 40px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ItemDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
`;
export const LabelForm = styled.label`
  font-size: 1.5rem;
`;

export const StyledInput = styled.input`
  width: 80%;
  font-size: 1.2rem;
  height: 50px;
  border: none;
  background-color: #eaf1fb;
  padding: 20px;
  opacity: 0.8;
  border-bottom: 1px solid gray;
`;

export const StyledInputTextArea = styled.textarea`
  font-size: 1.2rem;
  width: 80%;
  background-color: #eaf1fb;
  border: none;
  padding: 20px 10px;
  height: 10rem;
`;

export const CategoryContainer = styled.div`
  margin-top: 30px;
  display: flex:

`;

export const SelectWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SelectForm = styled.select`
  background: #eaf1fb;
  padding: 0px 10px;
  text-align: center;
  height: 50px;
  font-size: 1.3rem;
  border: none;
  color: #555;
  margin-left: 20px;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10%;
`;

export const SignInButton = styled.button`
  background-color: #0c4577;
  color: #fff;
  font-size: 1.5rem;
  padding: 12px 24px;
  width: 250px;
  /* background-color: #0c4577;
  color: #fff;
  padding: 8px 0;
  font-size: 1.5rem;
  width: 30%; */

  &:hover {
    opacity: 0.8;
  }
`;

export const ErrorsSignUp = styled.p`
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
