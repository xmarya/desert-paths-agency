import styled from "styled-components";

const StyledHeader = styled.header`
  max-width: 100%;
  max-height: 6rem;
  /* position: sticky; */
  color: var(--colour-offWhite);
  /* top: 1rem; */
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-block: 1.6rem;
  margin-block: 1rem 5rem;
  margin-inline: 1.5rem; // both sides = 3rem in total
  border-radius: var(--sm-radius);


  backdrop-filter: blur(6px) saturate(180%);
  -webkit-backdrop-filter: blur(6px) saturate(180%);
  background-color: hsl(from var(--colour-accent-light-green) h s l /1);

  box-shadow: var(--shadow-lg);
  z-index: 1;

`;

export default StyledHeader;
