import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 100%;
  gap: 6.4rem;

  @media (max-width:43.75em) {
    gap: 2.5rem;
  }
`;
export const ListItem = styled.li`
  font-size: var(--lg-text);
  font-family: var(--font-paragraph);
  font-weight: 600;
`;
