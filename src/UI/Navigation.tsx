import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6.4rem;
`;
export const ListItem = styled.li`
  font-size: var(--lg-text);
  font-family: var(--font-paragraph);
  font-weight: 300;
`;


const Navigation = styled.nav`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  background-color: brown;
`;

export default Navigation;
