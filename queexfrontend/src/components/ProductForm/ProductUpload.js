import { containerClasses } from "@mui/system";
import React, { useDeferredValue, useRef, useState } from "react";
import FromUtil from "./FromUtil";
import { Button } from "./../Button/Button";
import axios from "axios";
import { productListURL } from "../../constants";
import {
  FromContainer,
  FormWrapper,
  FormItem,
  SignInButton,
  SignInContainer,
  SignInWrapper,
  StyledForm,
  StyledHr,
  StyledInput,
  ErrorsSignUp,
  Topq,
  YesAccount,
  NavLinksTopQ,
  LabelForm,
  HeaderTitle,
  ItemDiv,
  StyledInputTextArea,
  InputWrapper,
  SelectForm,
  ButtonContainer,
  CategoryContainer,
  SelectWrapper,
} from "./ProductUploadStyles";

import ValidateItemUpload from "../FormUtil/ValidateItemUpload";
import validateItemInfo from "../FormUtil/ValidateItemUpload";

function ProductUpload() {
  //    use useRef() function to handle insted up useState()
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    upc: "",
    name: "",
    description: "",
    quantity: 0,
    price: 0,
    cost: 0,
    category: "",
  });

  const categoryList = {
    options: [
      { name: "Alcohol" },
      { name: "Food" },
      { name: "Beverage" },
      { name: "Snacks" },
    ],
  };

  const handleSubmit = (e) => {
    setErrors(validateItemInfo(values));
    console.log(values);
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      console.log(values);
      axios
        .post(productListURL, values)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("else called");
    }

    axios
      .post(productListURL, values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    console.log("this is target value", e.target);
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <FromContainer>
        <FormWrapper>
          <HeaderTitle> Product Details </HeaderTitle>
          <FormItem>
            <ItemDiv>
              <InputWrapper>
                <LabelForm>UPC</LabelForm>
                <StyledInput
                  name="upc"
                  type="text"
                  placeholder="Enter UPC"
                  value={values.upc}
                  onChange={handleChange}
                ></StyledInput>
                {errors.upc && <ErrorsSignUp> {errors.upc}</ErrorsSignUp>}
              </InputWrapper>
              <InputWrapper>
                <LabelForm>Name</LabelForm>
                <StyledInput
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                  value={values.name}
                  onChange={handleChange}
                ></StyledInput>
                {errors.name && <ErrorsSignUp> {errors.name}</ErrorsSignUp>}
              </InputWrapper>
            </ItemDiv>
            <ItemDiv>
              <InputWrapper>
                <LabelForm>Price</LabelForm>
                <StyledInput
                  name="price"
                  type="number"
                  placeholder="Enter price"
                  value={values.price}
                  onChange={handleChange}
                ></StyledInput>
                {errors.price && <ErrorsSignUp> {errors.price}</ErrorsSignUp>}
              </InputWrapper>
              <InputWrapper>
                <LabelForm>Cost</LabelForm>
                <StyledInput
                  name="cost"
                  type="number"
                  value={values.cost}
                  onChange={handleChange}
                ></StyledInput>
                {errors.cost && <ErrorsSignUp> {errors.cost}</ErrorsSignUp>}
              </InputWrapper>
            </ItemDiv>
            <ItemDiv>
              <InputWrapper>
                <LabelForm>Description</LabelForm>
                <StyledInputTextArea
                  name="description"
                  type="textarea"
                  placeholder="Describe your item"
                  value={values.description}
                  onChange={handleChange}
                ></StyledInputTextArea>
                {errors.description && (
                  <ErrorsSignUp> {errors.description}</ErrorsSignUp>
                )}
              </InputWrapper>
              <InputWrapper>
                <LabelForm>Quantity</LabelForm>
                <StyledInput
                  name="quantity"
                  type="text"
                  placeholder="0"
                  value={values.quantity}
                  onChange={handleChange}
                ></StyledInput>
                {errors.quantity && (
                  <ErrorsSignUp> {errors.quantity}</ErrorsSignUp>
                )}
                <CategoryContainer>
                  <SelectWrapper>
                    <LabelForm>Category</LabelForm>
                    <SelectForm
                      className="select-field"
                      name="category"
                      type="text"
                      value={values.category}
                      onChange={(value) => handleChange(value)}
                    >
                      <option value="">Select the Category</option>
                      {categoryList.options.map((dataitem, key) => (
                        <option value={dataitem.name} key={key}>
                          {dataitem.name}
                          {dataitem.key}
                        </option>
                      ))}
                    </SelectForm>
                  </SelectWrapper>
                </CategoryContainer>
              </InputWrapper>
            </ItemDiv>
            <StyledHr></StyledHr>
            <ButtonContainer>
              <SignInButton onClick={handleSubmit}> Add Item</SignInButton>
            </ButtonContainer>
          </FormItem>
        </FormWrapper>
      </FromContainer>
    </>
  );
}

export default ProductUpload;

// <div className="from-container">
//         <form onSubmit={handleSubmit} className="form-field-container">
//           <h1>Add Items</h1>
//           <hr />
//           <div className="form-field-container">
//             {inputs.map((input) => (
//               <FromUtil
//                 key={input.id}
//                 {...input}
//                 value={values[input.name]}
//                 onChange={onChange}
//               />
//             ))}

//             <div className="text-area">
//               <label> Description </label>
//               <textarea
//                 name="description"
//                 value={values.description}
//                 className="text-input-area"
//                 onChange={(value) => handleChange(value)}
//               >
//                 Required
//               </textarea>
//             </div>
//             <div className="select-container">
//               <label>Category</label>
//               <select
//                 className="select-field"
//                 name="category"
//                 type="text"
//                 value={values.category}
//                 onChange={(value) => handleChange(value)}
//               >
//                 <option value="">Select the Category</option>
//                 {categoryList.options.map((dataitem, key) => (
//                   <option value={dataitem.name} key={key}>
//                     {dataitem.name}
//                     {dataitem.key}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <button> Submit</button>
//         </form>
//       </div>
