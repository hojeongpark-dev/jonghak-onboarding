import styled from "styled-components";
import STRING from "../../../constants/strings";

const ProductTitle = styled.h1`
  font-size: 2rem;
`;

const ProductDesc = styled.p`
  font-size: 1rem;
`;

export default function Intro() {
  return (
    <>
      <ProductTitle>{STRING.PRODUCT_TITLE}</ProductTitle>
      <ProductDesc>{STRING.PRODUCT_DESCRIPTION}</ProductDesc>
    </>
  );
}
