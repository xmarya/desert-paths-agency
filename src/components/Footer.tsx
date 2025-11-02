import { use } from "react";
import { LanguageContext } from "../helpers/hooks/LanguageContext";
import ArabicFooter from "../UI/ArabicFooter";
import EnglishFooter from "../UI/EnglishFooter";
import styled, { css } from "styled-components";

const StyledFooter = styled.footer<{$language: "ar" | "en"}>`
  display: grid;
  backdrop-filter: blur(6px) saturate(180%);
  -webkit-backdrop-filter: blur(6px) saturate(180%);
  background-color: var(--colour-accent-light-green);
  color: var(--colour-offWhite);
  font-family: var(--font-paragraph);
  padding: 2rem;
  margin-top: var(--section-mb);

  ${props => {
    switch (props.$language) {
        case "en" : 
            return css`
                direction: ltr;
            `;
        
        default: 
            return css`
                direction: rtl;
            `;
    }
  }}
`;
export default function Footer() {
    const {language} = use(LanguageContext);
    return (
        <StyledFooter $language={language}>
            {language === "ar" ? <ArabicFooter/> : <EnglishFooter/>}
        </StyledFooter>
    )
}

