import styled from "styled-components";
import { SectionHeading } from "../UI/Headings";
import { List, ListItem } from "../UI/ListAndListItem";
import { use } from "react";
import { LanguageContext } from "../helpers/hooks/LanguageContext";
import ArabicWhyUs from "../UI/ArabicWhyUs";
import EnglishWhyUs from "../UI/EnglishWhyUs";


const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--contents-gap);

  ${List} {
    width: 100%;
    justify-content: center;
    gap: 2rem;

    > * {
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: calc(100% - 2rem / 2);

      width: 16rem;
      max-width: 18rem;
    }
  }

  ${ListItem} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--section-subheadings-mt);
  }
`;

export default function WhyUs({language}:{language: "ar" | "en"}) {
  return (
    <Contents>
      {language === "ar" ? <ArabicWhyUs/> : <EnglishWhyUs/>}
    </Contents>
  );
}
