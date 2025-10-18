import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  /* background-color: var(--colour-primary-light-brown); */
  padding-block: 1.6rem;
  margin-block: 1rem 5rem;
  margin-inline: 1.5rem; // both sides = 3rem in total
  border: var(--check);
  border-radius: 0;
  border-radius: 5rem; // TODO: use motion useScroll() ? and add a smooth transition


  backdrop-filter: blur(6px) saturate(180%);
  -webkit-backdrop-filter: blur(6px) saturate(180%);
  background-color: rgba(232, 183, 111, 0.75);
  border: 1px solid rgba(209, 213, 219, 0.3);
`;

export default StyledHeader;
