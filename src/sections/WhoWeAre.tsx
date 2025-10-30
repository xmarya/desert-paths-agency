import styled from "styled-components";
import { SectionHeading } from "../UI/Headings";
import { use } from "react";
import { LanguageContext } from "../helpers/hooks/LanguageContext";
import dictionary from "../dictionary/dictionary";

const Contents = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--contents-gap);

  p {
    text-align: center;
  }

  @media (max-width: 56.25em) {
    // 900 / 16
    flex-direction: column;
  }
`;

export default function WhoWeAre({language}:{language: "ar" | "en"}) {
  const {whoWeAre:{mainHeading, paragraph}} = dictionary[language];
  return (
      <Contents id="who-we-are">
        <SectionHeading>{mainHeading}</SectionHeading>
        <p>
          {paragraph}
        </p>
      </Contents>
  );
}
