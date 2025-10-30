import styled from "styled-components";
import dictionary from "../dictionary/dictionary";
import ArabicVision from "../UI/ArabicVision";
import EnglishVision from "../UI/EnglishVision";
import GrayBackground from "../UI/GrayBackground";
import { SectionHeading, SectionSubHeading } from "../UI/Headings";
import { List, ListItem } from "../UI/ListAndListItem";

const Contents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ParagraphWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--contents-gap);
  margin-block: 2rem;

  ${List} {
    justify-content: center;
    gap: 2rem;
    padding-inline: 2rem;

    > * {
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: calc(50% - 4rem / 2);
      max-width: 60rem;
      min-width: 27rem;
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
export default function Vision2030({language}:{language: "ar" | "en"}) {
  const {ourVision:{mainHeading, subHeading, paragraph}} = dictionary[language];
  return (
    <GrayBackground $height="250svh" style={{ ...(language === "en" && {direction:"ltr"})}}>
      <Contents id="vision-2030">
        <SectionHeading>{mainHeading}</SectionHeading>
        <SectionSubHeading>{subHeading}</SectionSubHeading>
        <ParagraphWrapper>
          <p>
            {paragraph}
          </p>

          {language === "ar" ? <ArabicVision/> : <EnglishVision/>}
        </ParagraphWrapper>
      </Contents>
    </GrayBackground>
  );
}
