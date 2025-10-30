import styled from "styled-components";

const NestedUl = styled.ul`
  list-style: circle !important;
  padding-inline: 5rem;

  @media (max-width: 28em) {
    // 370 /16
    font-size: var(--sm-text) !important;
    padding-inline: 2rem;
  }
`;

export default NestedUl;