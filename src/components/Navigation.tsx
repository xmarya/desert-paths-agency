import styled from "styled-components";
import ArabicNavigation from "../UI/ArabicNavigation";
import EnglishNavigation from "../UI/EnglishNavigation";

const StyledNavigation = styled.nav`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 32em) {
      visibility: hidden;
      pointer-events: none;
    }
`;
export default function Navigation({language}:{language: "ar" | "en"}) {
    
    return (
        <StyledNavigation>
            {language === "ar" ? <ArabicNavigation/> : <EnglishNavigation/>}
        </StyledNavigation>
    )
}

