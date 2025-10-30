import styled from "styled-components";

const Button = styled.button`
  background-color: var(--colour-primary-medium-brown);
  font-size: var(--button-text);
  font-family: var(--font-paragraph);
  color: #F3F4F6;
  font-weight: 500;

  border-radius: var(--sm-radius);
  box-shadow: var(--shadow-md);
  padding: 1rem 2rem;

  @media (max-width: 37.5em) {
    // 600 /16
    font-size: var(--lg-text);
     padding: 0.8rem 1.6rem;
  }
`;

export default Button;
