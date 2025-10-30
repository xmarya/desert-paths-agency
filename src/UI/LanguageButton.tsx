import styled from "styled-components";

const StyledLanguageButton = styled.button`
    color:var(--colour-offWhite); 
    font-size:1.4rem;
    transition: .3s all ease;
    &:hover {
        color: var(--colour-accent-dark-green);
    }
    &:disabled {
        color: var(--colour-grey-600);
    }
`;

export default function LanguageButton({ switchLanguage, language }: { switchLanguage: () => void; language: "ar" | "en" }) {
  return (
    <div style={{width:"fit-content", color:"var(--colour-offWhite)", fontSize:"2rem", display:"flex", alignItems:"center", justifyContent:"center", gap:"0.8rem"}}>
      <StyledLanguageButton onClick={switchLanguage} disabled={language === "ar" && true}>
        عربي
      </StyledLanguageButton>
      <span>|</span>
      <StyledLanguageButton onClick={switchLanguage} disabled={language === "en" && true}>
        English
      </StyledLanguageButton>
    </div>
  );
}
